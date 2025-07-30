import { ModalsInterface } from "../interfaces/ModalsInterface";


export const GestionarProductosModals = ({isOpen} : ModalsInterface)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <h1>GESTIONAR PRODUCTOS</h1>
            </div>
        )
    }
}

export default GestionarProductosModals;