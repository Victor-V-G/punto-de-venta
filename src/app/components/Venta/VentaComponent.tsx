'use client'
import { useState, useEffect } from "react";
import { InterfaceAlmacenarQR } from "@/app/interfaces/Venta/InterfaceAlmacenarQR";
import { obtenerProductos, registrarFactura } from "@/app/firebase/Promesas";
import { ProductoInterface } from "@/app/interfaces/ProductoInterface";

const InitialStateAlmacenarQR: InterfaceAlmacenarQR = {
    codigoQR: "",
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
            alert("Producto no encontrado.");
            setAlmacenarQR({codigoQR: ""});
        }
    }

    const handleSubirFactura = () => {
        registrarFactura(Factura).then(() => {
            alert("Factura registrada correctamente.");
        }).catch((error) => {
            console.error("Error al registrar la factura:", error);
            alert("Error al registrar la factura.");
        })
    }


    return (
            <>
                <h1>REALIZAR VENTA {AlmacenarQR.codigoQR}</h1>
                <form>
                    <h1>ESCANEAR PRODUCTO</h1>
                    <input 
                        type="number" 
                        name="codigoQR" 
                        placeholder="QR"
                        onChange={(e)=>handleAlmacenarQR(e.currentTarget.name, e.currentTarget.value)}
                        value={AlmacenarQR.codigoQR}
                        onKeyDown={(e)=>{
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleAgregarProducto();
            
                            }
                        }}
                    /> <br />
                    <span>INGRESE EL CODIGO DE BARRAS</span>
                </form>
                {PrecioTotal > 0 && (
                    <>
                        <h2>PRECIO TOTAL: {PrecioTotal}</h2>
                        <button onClick={()=>{handleSubirFactura()}}>COMPLETAR VENTA</button>
                    </>
                )}
                {productoFiltrado && (
                    <table>
                        <tbody>
                            <tr>
                                <td>NOMBRE DEL PRODUCTO: {productoFiltrado.nombre}</td> 
                                <td>CODIGO QR {productoFiltrado.codigoQR}</td>
                                <td>PRECIO {productoFiltrado.precio}</td>
                                <td>CANTIDAD {productoFiltrado.cantidad}</td>
                                <td>
                                    <button onClick={handleAgregarProducto}>AGREGAR</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )}
                {ProductosAgregados.length > 0 && (
                    <>
                        <h2>PRODUCTOS AGREGADOS A LA VENTA</h2>
                        <table>
                            <tbody>
                                {ProductosAgregados.map((producto, index) => (
                                    <tr key={index}>
                                        <td>NOMBRE DEL PRODUCTO: {producto.nombre}</td>
                                        <td>PRECIO: {producto.precio}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </>
    )
}

export default VentaComponent;