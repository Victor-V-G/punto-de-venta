'use client'
import RegistrarProductos from "@/app/components/Gestion/RegistrarProductos";
import { PropsExtendsMenuGestion } from "@/app/interfaces/extends/PropsExtendsMenuGestion";
import '../../components/Gestion/MenuGestion/assets/css/RP-style.css'

export const RegistrarProductoModals = ({isOpen, setIsOpenMenuGestionarTienda, setIsOpenRegistrarProducto, setIsOpenModificarProducto}: PropsExtendsMenuGestion)=>{
    if (isOpen == false) {
        return null
    } else {
        return (
            <div className="modals-rp-div">
                <RegistrarProductos />
                <button
                    className="modals-rp-button"
                    onClick={()=>{
                        setIsOpenMenuGestionarTienda(true);
                        setIsOpenRegistrarProducto(false);
                        setIsOpenModificarProducto(false);
                }}>X</button>
            </div>
        )
    }
}

export default RegistrarProductoModals;