'use client'
import '../Inicio/assets/css/InicioStyle.css'
import Image from 'next/image';
import shoppingImg from './assets/img/shopping-cart-inicio.png'
import packageImg from './assets/img/paquete-o-empaquetar.png'
import stockImg from './assets/img/reporte.png'
import { SidebarPropsInterface } from '@/app/interfaces/SidebarPropsInterface';

export const InicioComponent = ({setIsOpenInicio, setIsOpenVenta}: SidebarPropsInterface) => {

    return (
        <div className='div-inicio-principal'>

            <main className="main-inicio">
                <h1>BIENVENIDO. ELIJA UNA OPCIÓN</h1>   
            </main>

            <nav className='nav-acceso-rapido-inicio'>
                <div>
                    <button 
                        className='acceso-rapido-boton'
                        onClick={()=>{
                            setIsOpenVenta(true);
                            setIsOpenInicio(false);
                        }}>
                        <Image
                            className='acceso-rapido-img'
                            src={shoppingImg}
                            alt='shopping'
                        />
                        <span>REALIZAR VENTA</span>
                    </button>
                </div>
                <div>
                    <button className='acceso-rapido-boton'>
                        <Image
                            className='acceso-rapido-img'
                            src={packageImg}
                            alt='stock'
                        />
                        <span>VER STOCK</span>                    
                    </button>
                </div>
                <div>
                    <button className='acceso-rapido-boton'>
                        <Image
                            className='acceso-rapido-img'
                            src={stockImg}
                            alt='stock'
                        />
                        <span>HISTORIAL DE VENTA</span>          
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default InicioComponent;