'use client'

import { ObtenerIndexProps } from "@/app/interfaces/ObtenerIndexProps";

export const MostrarProducto = ({productos, obtenerIndex, eliminarProducto}: ObtenerIndexProps) => {
    return (
        <>  
            <h1>GESTION DE PRODUCTOS</h1>
            <table>
                <tbody>
                    {
                        productos.map((producto, index) => (
                            <tr key={index}>
                                <td>NOMBRE DEL PRODUCTO: {producto.nombre}</td> 
                                <td>CODIGO QR {producto.codigoQR}</td>
                                <td>PRECIO {producto.precio}</td>
                                <td>CANTIDAD {producto.cantidad}</td>
                                <td>
                                    <button
                                        onClick={()=>obtenerIndex(producto, index)}>Modificar
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