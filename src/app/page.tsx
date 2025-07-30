'use client'
import homeImg from './assets/img/home.png'
import cartImg from './assets/img/cart.png'
import packageImg from './assets/img/package.png'
import clipboardImg from './assets/img/clipboard-detail.png'
import Image from 'next/image';
import { useState } from 'react'
import VentaModals from './modals/VentaModals'
import InicioModals from './modals/InicioModals'
import GestionarProductosModals from './modals/GestionarProductosModals'
import VerStockModals from './modals/VerStockModals'

export default function Home() {
  const [IsOpenInicio, setIsOpenInicio] = useState(true)
  const [IsOpenVenta, setIsOpenVenta] = useState(false)
  const [IsOpenGestionarProductos, setIsOpenGestionarProductos] = useState(false)
  const [IsOpenVerStock, setIsOpenVerStock] = useState(false)

  return (
    <div className='grid-container'>
      <header className='header'>
        <div className='header-content'>
          <h1>PUNTO DE VENTA</h1>
        </div>
      </header>
      <aside className='aside'>
        <div className='aside-content'>
          <nav className='nav-content'>
            <button 
              className='sidebar-button'
              onClick={()=>{
                setIsOpenInicio(true);
                setIsOpenVenta(false);
                setIsOpenGestionarProductos(false);
                setIsOpenVerStock(false);
              }}>
              <Image
                className='sidebarImg'
                src={homeImg}
                alt='home'              
              />
              <span>INICIO</span>
            </button> <br />
            <button 
              className='sidebar-button'
              onClick={()=>{
                setIsOpenVenta(true);
                setIsOpenInicio(false); 
                setIsOpenGestionarProductos(false);
                setIsOpenVerStock(false);
              }}>
              <Image
                className='sidebarImg'
                src={cartImg}
                alt='cart'              
              />
              <span>VENTA</span>
            </button> <br />
            <button 
              className='sidebar-button'
              onClick={()=>{
                setIsOpenGestionarProductos(true);
                setIsOpenInicio(false);
                setIsOpenVenta(false);
                setIsOpenVerStock(false);
              }}>
              <Image
                className='sidebarImg'
                src={packageImg}
                alt='package'              
              />          
              <span>GESTIONAR PRODUCTOS</span> 
            </button> <br />
            <button 
              className='sidebar-button'
              onClick={()=>{
                setIsOpenVerStock(true);
                setIsOpenInicio(false);
                setIsOpenVenta(false);
                setIsOpenGestionarProductos(false);
              }}>
              <Image
                className='sidebarImg'
                src={clipboardImg}
                alt='clipboard'              
              />
              <span>VER STOCK</span>
            </button> <br />
          </nav>
        </div>
      </aside>
      <main className='main'>
        <div className='main-content'>
          <InicioModals
            isOpen={IsOpenInicio}
            setClose={()=>setIsOpenInicio(false)}
          />
          <VentaModals
            isOpen={IsOpenVenta}
            setClose={()=>setIsOpenVenta(false)}
          />
          <GestionarProductosModals
            isOpen={IsOpenGestionarProductos}
            setClose={()=>setIsOpenGestionarProductos(false)}
          />
          <VerStockModals
            isOpen={IsOpenVerStock}
            setClose={()=>setIsOpenVerStock(false)}
          />
        </div>
      </main>
      <footer className='footer'>
        <div className='footer-content'>
          <h1>FOOTER</h1>
        </div>
      </footer>
    </div>
  );
}
