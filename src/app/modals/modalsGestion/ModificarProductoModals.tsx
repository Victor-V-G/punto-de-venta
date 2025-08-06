'use client'
import ModificarProducto from "@/app/components/Gestion/ModificarProducto";
import { PropsExtendsMenuGestion } from "@/app/interfaces/extends/PropsExtendsMenuGestion";


export const ModificarProductoModals = ({isOpen, setIsOpenMenuGestionarTienda, setIsOpenRegistrarProducto, setIsOpenModificarProducto}: PropsExtendsMenuGestion) => {
    if (isOpen == false) {
        return null
    } else {
        return (
            <div>
                <ModificarProducto />
                <button onClick={()=>{
                        setIsOpenMenuGestionarTienda(true);
                        setIsOpenModificarProducto(false);
                        setIsOpenRegistrarProducto(false);
                }}>VOLVER ATRAS</button>
            </div>
        )
    }
}

export default ModificarProductoModals;