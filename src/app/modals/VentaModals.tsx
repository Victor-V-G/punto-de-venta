import { ModalsInterface } from "../interfaces/ModalsInterface";


export const VentaModals = ({isOpen} : ModalsInterface)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <h1>VENTA</h1>
            </div>
        )
    }
}

export default VentaModals;