'use client'
import '../Inicio/InicioStyle.css'
import Image from 'next/image';
import shoppingImg from './assets/img/shopping-cart-inicio.png'

export const InicioComponent = () => {
    return (
        <div className='div-inicio-principal'>

            <main className="main-inicio">
                <h1>BIENVENIDO. ELIJA UNA OPCIÓN</h1>
            </main>

            <nav className='nav-acceso-rapido-inicio'>
                <div>
                    <button className='acceso-rapido-boton'>
                        <Image
                            className='acceso-rapido-img'
                            src={shoppingImg}
                            alt='shopping'
                        />
                        <span>REALIZAR VENTA</span>
                    </button>
                </div>
                <div>
                    <button className='acceso-rapido-boton'>VER STOCK</button>
                </div>
                <div>
                    <button className='acceso-rapido-boton'>HISTORIAL DE VENTAS</button>
                </div>
            </nav>


        </div>
    )
}

export default InicioComponent;