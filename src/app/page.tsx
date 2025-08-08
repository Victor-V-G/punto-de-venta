'use client'
import homeImg from './assets/img/home.png'
import cartImg from './assets/img/cart.png'
import packageImg from './assets/img/package.png'
import storeImg from './assets/img/store-alt-2.png'
import billImg from './assets/img/file-detail.png'
import Image from 'next/image';
import { useState } from 'react'
import VentaModals from './modals/modalsPrincipales/VentaModals'
import InicioModals from './modals/modalsPrincipales/InicioModals'
import GestionarProductosModals from './modals/Gestionar Productos/GestionarProductosModals'
import VerStockModals from './modals/modalsPrincipales/VerStockModals'
import HistorialDeVentaModals from './modals/modalsPrincipales/HistorialDeVentaModals'


export default function Home() {
  const [IsOpenInicio, setIsOpenInicio] = useState(true)
  const [IsOpenVenta, setIsOpenVenta] = useState(false)
  const [IsOpenGestionarProductos, setIsOpenGestionarProductos] = useState(false)
  const [IsOpenVerStock, setIsOpenVerStock] = useState(false)
  const [IsOpenHistorialDeVenta, setIsOpenHistorialDeVenta] = useState(false)
  const [Valid, setValid] = useState(false);
  return (
    <div className='grid-container'>
      <header className='header'>
        <div className='header-content'></div>
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
                setIsOpenHistorialDeVenta(false);   
                setValid(false)       
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
                setIsOpenHistorialDeVenta(false);
                setValid(false)              
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
                setIsOpenHistorialDeVenta(true);
                setIsOpenInicio(false);
                setIsOpenVenta(false);
                setIsOpenVerStock(false);
                setIsOpenGestionarProductos(false);
                setValid(false)  
              }}>
              <Image
                className='sidebarImg'
                src={billImg}
                alt='bill'              
              />
              <span>HISTORIAL DE VENTA</span>
            </button> <br />       
            <button 
              className='sidebar-button'
              onClick={()=>{
                setIsOpenGestionarProductos(true);
                setIsOpenInicio(false);
                setIsOpenVenta(false);
                setIsOpenVerStock(false);
                setIsOpenHistorialDeVenta(false);
              }}>
              <Image
                className='sidebarImg'
                src={storeImg}
                alt='package'              
              />          
              <span>GESTIONAR PRODUCTOS</span> 
            </button> <br />
          </nav>
        </div>
      </aside>
      <main className='main'>
        <div className='main-content'>
          <InicioModals
            isOpen={IsOpenInicio}
            setClose={()=>setIsOpenInicio(false)}
            setIsOpenInicio={setIsOpenInicio}
            setIsOpenVenta={setIsOpenVenta}
            setIsOpenStock={setIsOpenVerStock}
            setIsOpenHistorialDeVenta={setIsOpenHistorialDeVenta}
            setIsOpenGestionarProductos={setIsOpenGestionarProductos}
          />
          <VentaModals
            isOpen={IsOpenVenta}
            setClose={()=>setIsOpenVenta(false)}
          />
          <HistorialDeVentaModals
            isOpen={IsOpenHistorialDeVenta}
            setClose={()=>setIsOpenHistorialDeVenta(false)}
          />
          <GestionarProductosModals
            isOpen={IsOpenGestionarProductos}
            setClose={()=>setIsOpenGestionarProductos(false)}
            Valid={Valid}
            setValid={setValid}
          />
        </div>
      </main>
      <footer className='footer'>
        <div className='footer-content'></div>
      </footer>
    </div>
  );
}
