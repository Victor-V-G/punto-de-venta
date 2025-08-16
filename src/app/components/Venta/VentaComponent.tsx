'use client'
import { useState, useEffect } from "react";
import { InterfaceAlmacenarQR } from "@/app/interfaces/Venta/InterfaceAlmacenarQR";
import { modificarStock, obtenerID, obtenerProductos, registrarFactura } from "@/app/firebase/Promesas";
import { ProductoInterface } from "@/app/interfaces/ProductoInterface";
import './assets/css/VC-style.css'
import { InterfaceID } from "@/app/interfaces/InterfaceID";

const InitialStateAlmacenarQR: InterfaceAlmacenarQR = {
    codigoQR: "",
}

const InitialStateProductos: ProductoInterface = {
    nombre : "",
    codigoQR : "",
    precio : "",
    cantidad : ""
}



export const VentaComponent = ()=>{
    
    const [AlmacenarQR, setAlmacenarQR] = useState(InitialStateAlmacenarQR)
    const [ProductosRecuperados, setProductosRecuperados] = useState<ProductoInterface[]>([]);
    const [ProductoEncontrado, setProductoEncontrado] = useState(false)
    const [ProductosAgregados, setProductosAgregados] = useState<ProductoInterface[]>([]);
    const [PrecioTotal, setPrecioTotal] = useState(0);
    const [Factura, setFactura] = useState({
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
        productos: [] as ProductoInterface[],
        total: 0
    });
    const [pr, setpr] = useState(InitialStateProductos)
    const [AlmacenarIDS, setAlmacenarIDS] = useState<InterfaceID[]>([])


    useEffect(() => {
        obtenerID().then((ids) => {
            setAlmacenarIDS(ids);
            console.log("IDs obtenidos:", ids);
        }).catch((error) => {
            alert("Error al obtener los IDs de los productos: ")
            console.log(error)
        })
    }, [])


    useEffect(() => {
        obtenerProductos().then((productos) => {
            setProductosRecuperados(productos);
        }
        ).catch((error) => {
            console.error("Error al obtener productos:", error);
        });
    }, [])


    const handleAlmacenarQR = (name:string,value:string) => {
        setAlmacenarQR(
            {...AlmacenarQR,[name]:value}
        );
    }

    const codigosQRRecuperados = ProductosRecuperados.map((productos => productos.codigoQR));

    useEffect(() => {
        if (codigosQRRecuperados.includes(AlmacenarQR.codigoQR)) {
            setProductoEncontrado(true)
        } else {
            setProductoEncontrado(false)
        }
    }, [AlmacenarQR.codigoQR, codigosQRRecuperados]);


    const productoFiltrado = ProductosRecuperados.find(
        producto => producto.codigoQR === AlmacenarQR.codigoQR
    );


    const handleAgregarProducto = () => {
        if (productoFiltrado) {
            if (!ProductosAgregados.some(producto => producto.codigoQR === productoFiltrado.codigoQR)) {
                setProductosAgregados([...ProductosAgregados, productoFiltrado]);
                ProductosAgregados.some(producto => producto.precio === productoFiltrado.codigoQR) 
                setPrecioTotal(PrecioTotal => PrecioTotal + Number(productoFiltrado.precio));
                setAlmacenarQR({codigoQR: ""});
                setFactura({
                    ...Factura,
                    productos: [productoFiltrado, ...Factura.productos],
                    total: Factura.total + Number(productoFiltrado.precio)
                });
            } else {
                setProductosAgregados([...ProductosAgregados, productoFiltrado]);
                setPrecioTotal(PrecioTotal => PrecioTotal + Number(productoFiltrado.precio));
                setAlmacenarQR({codigoQR: ""});
                setFactura({
                    ...Factura,
                    productos: [...Factura.productos, productoFiltrado],
                    total: Factura.total + Number(productoFiltrado.precio)
                });
            }
        } else {
            alert("Producto no encontrado.")
            setAlmacenarQR({codigoQR: ""})
        }
    }

    const handleSubirFactura = () => {
        registrarFactura(Factura).then(() => {

            // Creamos un array local de las cantidades actuales
            const stockActual = ProductosRecuperados.map(p => Number(p.cantidad));

            // Recorremos los productos de la factura
            Factura.productos.forEach((producto) => {
                const index = ProductosRecuperados.findIndex(p => p.codigoQR === producto.codigoQR);
                if (index !== -1) {
                    const idProducto = AlmacenarIDS[index];

                    // Restar 1 del stock local y actualizar en Firestore
                    stockActual[index] = stockActual[index] - 1;

                    modificarStock(idProducto, {
                        ...ProductosRecuperados[index],
                        cantidad: stockActual[index].toString()
                    })
                    .then(() => console.log(`Stock actualizado para: ${producto.nombre}`))
                    .catch((error) => console.error("Error al modificar stock:", error));
                }
            });

            alert("Factura registrada y stock actualizado correctamente.");

            // Limpiar estados
            setProductosAgregados([]);
            setPrecioTotal(0);
            setFactura({
                ...Factura,
                productos: [],
                total: 0
            });

        }).catch((error) => {
            console.error("Error al registrar la factura:", error);
            alert("Error al registrar la factura.");
        });
    };

    
    const handleEliminarProducto = (index: number) => {
        const productoAEliminar = ProductosAgregados[index];
        if (!productoAEliminar) return;

        // Eliminar solo el producto en la posición indicada
        const nuevosProductosAgregados = [...ProductosAgregados];
        nuevosProductosAgregados.splice(index, 1);

        const nuevosProductosFactura = [...Factura.productos];
        nuevosProductosFactura.splice(index, 1);

        // Actualizar estados
        setProductosAgregados(nuevosProductosAgregados);
        setPrecioTotal(prev => prev - Number(productoAEliminar.precio));
        setFactura({
            ...Factura,
            productos: nuevosProductosFactura,
            total: Factura.total - Number(productoAEliminar.precio)
        });
    };

    const index = 0
    const poscicion = AlmacenarIDS.slice(index, index + 1);

    const handleModificarStock = () =>{
        modificarStock(poscicion[0], pr).then(() => {
            alert("Se modifico el stock")
        }).catch((error) =>{
            console.log(error)
        })
    }

    return (
            <>
                <div className="venta-container">
                    <h1>REALIZAR VENTA</h1>
                    <form className="venta-form">
                        <span>INGRESE EL CODIGO DE BARRAS</span> <br />
                        <input 
                            type="number" 
                            name="codigoQR" 
                            placeholder="QR"
                            autoFocus
                            onChange={(e)=>handleAlmacenarQR(e.currentTarget.name, e.currentTarget.value)}
                            value={AlmacenarQR.codigoQR}
                            onKeyDown={(e)=>{
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleAgregarProducto();
                
                                }
                            }}
                        />
                    </form>
                    {productoFiltrado && (
                        <table className="venta-table">
                            <tbody>
                                <tr>
                                    <td>NOMBRE DEL PRODUCTO: {productoFiltrado.nombre}</td> 
                                    <td>CODIGO QR {productoFiltrado.codigoQR}</td>
                                    <td>PRECIO {productoFiltrado.precio}</td>
                                    <td>CANTIDAD {productoFiltrado.cantidad}</td>
                                    <td>
                                        <button
                                            className="venta-button"
                                            onClick={handleAgregarProducto}>AGREGAR
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )} <br />
                    {ProductosAgregados.length > 0 && (
                        <>
                            <h2>PRODUCTOS AGREGADOS A LA VENTA</h2>
                            <table className="venta-table">
                                <tbody>
                                    {ProductosAgregados.map((producto, index) => (
                                        <tr key={index}>
                                            <td>NOMBRE DEL PRODUCTO: {producto.nombre}</td>
                                            <td>PRECIO: {producto.precio}</td>
                                            <td>
                                                <button
                                                    className="venta-button"
                                                    onClick={()=>handleEliminarProducto(index)}>ELIMINAR
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </>
                    )} <br />
                    {PrecioTotal > 0 && (
                        <>
                            <h2 className="precio-total">PRECIO TOTAL: ${PrecioTotal}</h2>
                            <button 
                                className="venta-button" 
                                onClick={()=>{
                                    handleSubirFactura()}}>COMPLETAR VENTA
                            </button>
                        </>
                    )}
                </div>
            </>
    )
}

export default VentaComponent;