import { obtenerFacturas } from "@/app/firebase/Promesas"
import { FacturaInterface } from "@/app/interfaces/Venta/FacturaInterface";
import { useEffect, useState } from "react"
import './assets/css/HV-style.css'

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
            <table className="table-hv">
                <tbody>
                    <tr>
                        <td>FECHA:</td>
                        <td>HORA</td>
                        <td>PRODUCTO</td>
                        <td>TOTAL</td>
                    </tr>
                    {
                        Facturas.map((facturas, index) => (
                            <tr key={index}>
                                <td>{facturas.fecha}</td> 
                                <td>{facturas.hora}</td>
                                <td>{facturas.productos.map((producto, index)=>(
                                    <table key={index} className="producto-tabla">
                                        <tbody>
                                            <tr>
                                                <td className="producto-nombre">NOMBRE: {producto.nombre}</td>
                                                <td className="producto-precio">PRECIO: ${producto.precio}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ))}
                                </td>
                                <td className="total-cell">TOTAL: ${facturas.total}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default HistorialDeVentas;