'use client'
import { useState } from "react";
import { ProductoInterface } from "@/app/interfaces/ProductoInterface";
import { registrarProducto } from "@/app/firebase/Promesas";
import './MenuGestion/assets/css/RP-style.css'

const InitialStateProductos:ProductoInterface = {
    nombre: "",
    codigoQR: "",
    precio: "",
    cantidad: ""
}

export const RegistrarProductos = () => {
    const [Productos, setProductos] = useState(InitialStateProductos)

    const handleProducto = (name:string,value:string)=>{
        setProductos(
            {...Productos,[name]:value}
        )
    }

    const handleRegistrarProducto = ()=>{
        registrarProducto(Productos).then(()=>{
            alert("Producto registrado correctamente")
            setProductos(InitialStateProductos); // Limpia los campos
        }).catch((error)=>{
            alert("Error al registrar el producto")
            console.log(error)
        })
    }


    return (
        <div className="div-rp-principal">
            <h1>REGISTRAR PRODUCTOS</h1> <br />
            <div>
                <form>
                    <span>NOMBRE DEL PRODUCTO</span> <br />
                    <input 
                        type="text" 
                        name="nombre"
                        placeholder="Nombre del producto"
                        className="input-rp"
                        value={Productos.nombre}
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)}
                    />
                    <br /> <span>CODIGO QR DEL PRODUCTO</span> <br />
                    <input 
                        type="number" 
                        name="codigoQR"
                        placeholder="Codigo del producto"
                        className="input-rp"
                        value={Productos.codigoQR}
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)} 
                    />
                    <br /> <span>PRECIO DEL PRODUCTO</span> <br />                
                    <input 
                        type="number" 
                        name="precio"
                        placeholder="Precio del producto"
                        className="input-rp"
                        value={Productos.precio}
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)}
                    />
                    <br /> <span>CANTIDAD DEL PRODUCTO</span> <br />
                    <input 
                        type="number" 
                        name="cantidad"
                        placeholder="Cantidad del producto" 
                        className="input-rp"
                        value={Productos.cantidad}
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)}
                    />
                    <br />
                    <button
                        className="button-rp"
                        disabled={Productos.nombre === "" || Productos.codigoQR === "" || Productos.precio === "" || Productos.cantidad === ""}
                        onClick={(e)=>{
                            handleRegistrarProducto();
                            (e).preventDefault(); }}> Registrar Producto
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegistrarProductos;