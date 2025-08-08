'use client'
import '../assets/css/MP-style.css'
import { ObtenerIndexProps } from "@/app/interfaces/ObtenerIndexProps";

export const MostrarProducto = ({productos, obtenerIndex, eliminarProducto}: ObtenerIndexProps) => {
    return (
        <>  
            
            <table className="table-mp">
                <tbody>
                    <tr>
                        <td>NOMBRE DEL PRODUCTO</td>
                        <td>CODIGO DE BARRAS</td>
                        <td>PRECIO</td>
                        <td>STOCK</td>
                        <td>ACCIONES</td>
                    </tr>
                    {
                        productos.map((producto, index) => (
                            <tr key={index}>
                                <td>{producto.nombre}</td> 
                                <td>{producto.codigoQR}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>
                                    <button
                                        onClick={()=>obtenerIndex(producto, index)}>MODIFICAR
                                    </button>
                                    <button
                                        onClick={()=>eliminarProducto(index)}>ELIMINAR
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default MostrarProducto;