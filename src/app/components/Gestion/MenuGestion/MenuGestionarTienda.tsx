'use client'
import './assets/css/MenuGestionarTiendaStyle.css'
import { MenuGestionInterface } from '@/app/interfaces/MenuGestionInterface'

export const MenuGestionarTienda = ({setIsOpenMenuGestionarTienda, setIsOpenRegistrarProducto, setIsOpenModificarProducto}:MenuGestionInterface) =>{

    return (
        <div className='div-menu-principal'>

            <main className="main-menu">
                <h1>BIENVENIDO AL MENU DE ADMINISTRADOR <br /> <br /> ELIJA UNA OPCIÓN</h1>   
            </main>

            <nav className='nav-acceso-rapido-menu'>
                <div>
                    <button 
                        className='acceso-rapido-boton-menu'
                        onClick={()=>{
                            setIsOpenRegistrarProducto(true);
                            setIsOpenMenuGestionarTienda(false);
                            setIsOpenModificarProducto(false);
                        }}>

                        <span>REGISTRAR PRODUCTO</span>
                    </button>
                </div>
                <div>
                    <button 
                        className='acceso-rapido-boton-menu'
                        onClick={()=>{
                            setIsOpenModificarProducto(true);
                            setIsOpenMenuGestionarTienda(false);
                            setIsOpenRegistrarProducto(false);
                        }}>
                        <span>MODIFICAR PRODUCTO</span>                    
                    </button>
                </div>
            </nav>

            <div>

            </div>
        </div>
    )
}

export default MenuGestionarTienda;