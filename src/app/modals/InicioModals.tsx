import { ModalsInterface } from "../interfaces/ModalsInterface";
import InicioComponent from "../components/Inicio/InicioComponent";

export const InicioModals = ({isOpen} : ModalsInterface)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <InicioComponent/>
            </div>
        )
    }
}


export default InicioModals;