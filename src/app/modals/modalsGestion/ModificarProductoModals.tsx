'use client'
import ModificarProducto from "@/app/components/Gestion/ModificarProducto";
import { PropsExtendsMenuGestion } from "@/app/interfaces/extends/PropsExtendsMenuGestion";
import '../../components/Gestion/MenuGestion/assets/css/MP-style.css'

export const ModificarProductoModals = ({isOpen, setIsOpenMenuGestionarTienda, setIsOpenRegistrarProducto, setIsOpenModificarProducto}: PropsExtendsMenuGestion) => {
    if (isOpen == false) {
        return null
    } else {
        return (
            <div>
                <div>
                    <ModificarProducto />
                    <button 
                        className="btn-volver"
                        onClick={()=>{
                            setIsOpenMenuGestionarTienda(true);
                            setIsOpenModificarProducto(false);
                            setIsOpenRegistrarProducto(false);
                    }}>VOLVER ATRAS</button>
                </div>
            </div>
        )
    }
}

export default ModificarProductoModals;