'use client'
import InicioComponent from "../components/Inicio/InicioComponent";
import { PropsExtendsModalsSidebar } from "../interfaces/extends/PropsExtendsModalsSidebar";


export const InicioModals = ({isOpen, setIsOpenInicio, setIsOpenVenta} : PropsExtendsModalsSidebar)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <InicioComponent
                    setIsOpenInicio={setIsOpenInicio}
                    setIsOpenVenta={setIsOpenVenta}
                />
            </div>
        )
    }
}


export default InicioModals;