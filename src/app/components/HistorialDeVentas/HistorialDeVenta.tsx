import { obtenerFacturas } from "@/app/firebase/Promesas"
import { FacturaInterface } from "@/app/interfaces/Venta/FacturaInterface";
import { useEffect, useState } from "react"

export const HistorialDeVentas = () => {

    const [Facturas, setFacturas] = useState<FacturaInterface[]>([]);

    useEffect(() => {
        obtenerFacturas().then((facturas) => {
            setFacturas(facturas);
        }).catch((error) => {
            console.error("Error al obtener facturas:", error)
        })
    }, []);

    return (
        <>
            <h1>GESTION DE PRODUCTOS</h1>
            <table>
                <tbody>
                    {
                        Facturas.map((facturas, index) => (
                            <tr key={index}>
                                <td>FECHA: {facturas.fecha}</td> 
                                <td>HORA: {facturas.hora}</td>
                                <td>PRODUCTO: {facturas.productos.map((producto, index)=>{
                                    return (
                                        <span key={index}><br />
                                            NOMBRE: {producto.nombre} <br />
                                            PRECIO: {producto.precio}
                                        </span>
                                    )
                                    })}
                                </td>
                                <td>TOTAL: {facturas.total}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default HistorialDeVentas;