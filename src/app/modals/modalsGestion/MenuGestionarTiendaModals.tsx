import MenuGestionarTienda from "@/app/components/Gestion/MenuGestion/MenuGestionarTienda";
import { PropsExtendsMenuGestion } from "@/app/interfaces/extends/PropsExtendsMenuGestion";


export const MenuGestionarTiendaModals = ({isOpen, setIsOpenMenuGestionarTienda, setIsOpenRegistrarProducto, setIsOpenModificarProducto}: PropsExtendsMenuGestion) => {
    if (isOpen == false) {
        return null
    } else {
        return (
            <div>
                <MenuGestionarTienda 
                    setIsOpenMenuGestionarTienda={setIsOpenMenuGestionarTienda}
                    setIsOpenRegistrarProducto={setIsOpenRegistrarProducto}
                    setIsOpenModificarProducto={setIsOpenModificarProducto}
                />
            </div>
        )
    }
}

export default MenuGestionarTiendaModals;