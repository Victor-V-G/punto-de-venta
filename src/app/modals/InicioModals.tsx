import { ModalsInterface } from "../interfaces/ModalsInterface";


export const InicioModals = ({isOpen} : ModalsInterface)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <h1>INICIO</h1>
            </div>
        )
    }
}


export default InicioModals;