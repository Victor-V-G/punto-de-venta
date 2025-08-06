import { ModalsInterface } from "@/app/interfaces/ModalsInterface";
import VentaComponent from "@/app/components/Venta/VentaComponent";

export const VentaModals = ({isOpen} : ModalsInterface)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <VentaComponent/>
            </div>
        )
    }
}

export default VentaModals;