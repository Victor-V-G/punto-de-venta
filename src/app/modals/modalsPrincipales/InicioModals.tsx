'use client'
import InicioComponent from '@/app/components/Inicio/InicioComponent';
import { PropsExtendsModalsSidebar } from '@/app/interfaces/extends/PropsExtendsModalsSidebar';


export const InicioModals = ({isOpen, setIsOpenInicio, setIsOpenVenta, setIsOpenStock, setIsOpenHistorialDeVenta, setIsOpenGestionarProductos} : PropsExtendsModalsSidebar)=>{
    if (isOpen == false){
        return null
    } else {
        return (
            <div>
                <InicioComponent
                    setIsOpenInicio={setIsOpenInicio}
                    setIsOpenVenta={setIsOpenVenta}
                    setIsOpenStock={setIsOpenStock}
                    setIsOpenHistorialDeVenta={setIsOpenHistorialDeVenta}
                    setIsOpenGestionarProductos={setIsOpenGestionarProductos}
                />
            </div>
        )
    }
}


export default InicioModals;