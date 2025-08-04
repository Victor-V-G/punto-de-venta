'use client'
import './assets/css/MenuGestionarTiendaStyle.css'
import Image from 'next/image'

export const MenuGestionarTienda = ()=>{
    
    return (
        <div className='div-menu-principal'>

            <main className="main-menu">
                <h1>BIENVENIDO. ELIJA UNA OPCIÓN</h1>   
            </main>

            <nav className='nav-acceso-rapido-menu'>
                <div>
                    <button 
                        className='acceso-rapido-boton-menu'
                        onClick={()=>{

                        }}>

                        <span>REALIZAR VENTA</span>
                    </button>
                </div>
                <div>
                    <button 
                        className='acceso-rapido-boton-menu'
                        onClick={()=>{

                        }}>


                        <span>VER STOCK</span>                    
                    </button>
                </div>
                <div>
                    <button 
                        className='acceso-rapido-boton-menu'
                        onClick={()=>{
                        }}>

                        <span>HISTORIAL DE VENTA</span>          
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default MenuGestionarTienda;