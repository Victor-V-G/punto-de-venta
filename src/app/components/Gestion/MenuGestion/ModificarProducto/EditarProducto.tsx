'use client'
import { modificarProducto, obtenerID } from "@/app/firebase/Promesas";
import { PropsExtendsEditarProductoModals } from "@/app/interfaces/extends/PropsExtendsEditarProductoModals";
import { InterfaceID } from "@/app/interfaces/InterfaceID";
import { ProductoInterface } from "@/app/interfaces/ProductoInterface";
import { useEffect, useState } from "react";
import '../assets/css/MP-style.css'

const InitialStateProducto:ProductoInterface = {
    nombre: "",
    codigoQR: "",
    precio: "",
    cantidad: "",
}

export const EditarProducto = ({isOpen, setClose, producto, index}:PropsExtendsEditarProductoModals) => {
    
    const [Producto, setProducto] = useState(InitialStateProducto)
    const [AlmacenarIDS, setAlmacenarIDS] = useState<InterfaceID[]>([])

    const handleRegistrarEdicion = (name:string, value:string) => {
        setProducto(
            {...Producto, [name]: value}
        )
    }

    useEffect(() => {
        setProducto(producto);
    }, [producto]);


    useEffect(() => {
        obtenerID().then((ids) => {
            setAlmacenarIDS(ids);
            console.log("IDs obtenidos:", ids);
        }).catch((error) => {
            alert("Error al obtener los IDs de los productos: ")
            console.log(error)
        })
    }, [])
    
    const poscicion = AlmacenarIDS.slice(index, index + 1);

    const handleModificarProducto = () => {
        modificarProducto(poscicion[0], Producto).then(() => {
            alert("Producto modificado correctamente")
            setClose(); // Esto cierra el modal y refresca la lista
        }).catch((error) => {
            alert("Error al modificar el producto")
            console.log(error)
        })
    }

    if (isOpen == false){
        return null
    } else {
        return (
            <>
                <div className="modal-overlay">
                    <div className="modal-container">
                        <form className="form-ep">
                            <span>NOMBRE DEL PRODUCTO</span>
                            <input 
                                type="text" 
                                name="nombre" 
                                value={Producto.nombre}
                                onChange={(e)=>handleRegistrarEdicion(e.currentTarget.name,e.currentTarget.value)}
                            /> <br />
                            <span>CODIGO DE BARRAS</span>
                            <input 
                                type="number" 
                                name="codigoQR" 
                                value={Producto.codigoQR}
                                onChange={(e)=>handleRegistrarEdicion(e.currentTarget.name,e.currentTarget.value)}
                            /> <br />
                            <span>PRECIO</span>
                            <input 
                                type="number" 
                                name="precio" 
                                value={Producto.precio}
                                onChange={(e)=>handleRegistrarEdicion(e.currentTarget.name,e.currentTarget.value)}
                            /> <br />
                            <span>STOCK</span>
                            <input 
                                type="number" 
                                name="cantidad" 
                                value={Producto.cantidad}
                                onChange={(e)=>handleRegistrarEdicion(e.currentTarget.name,e.currentTarget.value)}
                            />
                            <button
                                onClick={(e)=>{
                                    e.preventDefault();
                                    handleModificarProducto();
                                }}>MODIFICAR</button>
                            <button onClick={setClose}>CANCELAR Y VOLVER</button>
                        </form>

                    </div>
                </div>
            </>

        );
    }

}

export default EditarProducto;