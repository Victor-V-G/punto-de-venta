
import { ModalsInterface } from "../../interfaces/ModalsInterface";

export const VerStockModals = ({isOpen} : ModalsInterface )=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <h1>VER STOCK</h1>
            </div>
        )
    }
}

export default VerStockModals;