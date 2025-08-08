'use client'
import HistorialDeVentas from "@/app/components/HistorialDeVentas/HistorialDeVenta";
import { ModalsInterface } from "../../interfaces/ModalsInterface";

export const HistorialDeVentaModals = ({isOpen}: ModalsInterface)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <HistorialDeVentas />
            </div>
        )
    }
}

export default HistorialDeVentaModals;