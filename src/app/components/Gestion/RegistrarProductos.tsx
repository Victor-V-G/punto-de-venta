'use client'
import { useState } from "react";
import { ProductoInterface } from "@/app/interfaces/ProductoInterface";
import { registrarProducto } from "@/app/firebase/Promesas";

const InitialStateProductos:ProductoInterface = {
    nombre: "",
    codigoQR: "",
    precio: 0,
    cantidad: 0
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
        }).catch((error)=>{
            alert("Error al registrar el producto")
            console.log(error)
        })
    }

    
    return (
        <div>
            <h1>REGISTRAR PRODUCTOS</h1> <br />
            <div>
                <form>
                    <span>NOMBRE DEL PRODUCTO</span> <br />
                    <input 
                        type="text" 
                        name="nombre"
                        placeholder="Nombre del producto" 
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)}
                    />
                    <br /> <span>CODIGO QR DEL PRODUCTO</span> <br />
                    <input 
                        type="text" 
                        name="codigoQR"
                        placeholder="Codigo del producto"
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)} 
                    />
                    <br /> <span>PRECIO DEL PRODUCTO</span> <br />                
                    <input 
                        type="number" 
                        name="precio"
                        placeholder="Precio del producto" 
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)}
                    />
                    <br /> <span>CANTIDAD DEL PRODUCTO</span> <br />
                    <input 
                        type="number" 
                        name="cantidad"
                        placeholder="Cantidad del producto" 
                        onChange={(e)=>handleProducto(e.currentTarget.name,e.currentTarget.value)}
                    />
                    <br />
                    <button onClick={()=>handleRegistrarProducto()}>Registrar Producto</button>
                </form>
            </div>
        </div>
    );
}

export default RegistrarProductos;