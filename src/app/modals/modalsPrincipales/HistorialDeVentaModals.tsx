'use client'
import { ModalsInterface } from "../../interfaces/ModalsInterface";

export const HistorialDeVentaModals = ({isOpen}: ModalsInterface)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <h1>HISTORIAL DE VENTA</h1>
            </div>
        )
    }
}

export default HistorialDeVentaModals;