'use client'
import RegistrarProductos from "@/app/components/Gestion/RegistrarProductos";
import { PropsExtendsMenuGestion } from "@/app/interfaces/extends/PropsExtendsMenuGestion";


export const RegistrarProductoModals = ({isOpen, setIsOpenMenuGestionarTienda, setIsOpenRegistrarProducto, setIsOpenModificarProducto}: PropsExtendsMenuGestion)=>{
    if (isOpen == false) {
        return null
    } else {
        return (
            <div>
                <RegistrarProductos />
                <button onClick={()=>{
                    setIsOpenMenuGestionarTienda(true);
                    setIsOpenRegistrarProducto(false);
                    setIsOpenModificarProducto(false);
                }}>VOLVER ATRAS</button>
            </div>
        )
    }
}

export default RegistrarProductoModals;