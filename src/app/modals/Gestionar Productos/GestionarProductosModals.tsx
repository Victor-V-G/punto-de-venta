'use client'
import { useEffect, useState } from "react";
import { PasswordInterface } from "../../interfaces/PasswordInterface";
import { ValidPropsExtends } from "../../interfaces/extends/ValidPropsExtends";
import MenuGestionarTiendaModals from "../modalsGestion/MenuGestionarTiendaModals";
import RegistrarProductoModals from "../modalsGestion/RegistrarProductoModals";
import ModificarProductoModals from "../modalsGestion/ModificarProductoModals";
import './GP-style.css'

const InitialStatePassword:PasswordInterface={
    password:"",
}

export const GestionarProductosModals = ({isOpen, Valid, setValid} : ValidPropsExtends)=>{
    const [IsOpenMenuGestionarTienda, setIsOpenMenuGestionarTienda] = useState(false)
    const [IsOpenRegistrarProducto, setIsOpenRegistrarProducto] = useState(false)
    const [IsOpenModificarProducto, setIsOpenModificarProducto] = useState(false)
    const [password, setpassword] = useState(InitialStatePassword)


    const handlePassword =(name:string, value:string)=>{
        setpassword(
            {...password,[name]:value}
        )
    }

    const handleCheck = ()=>{
        if (password.password.trim() === ""){
            alert("Ingrese una contraseña")
            setValid(false)
        }

        if (password.password === '123'){
            alert("contraseña correcta")
            setValid(true);
            setIsOpenMenuGestionarTienda(true);
            setIsOpenModificarProducto(false);
            setIsOpenRegistrarProducto(false);
        } else {
            alert("contraseña incorrecta")
            setValid(false)
        }
    }

    useEffect(() => {
        if (Valid == false) {
            setpassword(InitialStatePassword); 
        }
    }, [Valid]);

    
    if (isOpen == false){
        return null
    } 

    if (Valid == true) {
        return (
            <>
                <MenuGestionarTiendaModals 
                    isOpen={IsOpenMenuGestionarTienda} 
                    setClose={()=>setIsOpenMenuGestionarTienda(false)}
                    setIsOpenMenuGestionarTienda={setIsOpenMenuGestionarTienda}
                    setIsOpenRegistrarProducto={setIsOpenRegistrarProducto}
                    setIsOpenModificarProducto={setIsOpenModificarProducto}
                />
                <RegistrarProductoModals
                    isOpen={IsOpenRegistrarProducto}
                    setClose={()=>setIsOpenRegistrarProducto(false)}
                    setIsOpenMenuGestionarTienda={setIsOpenMenuGestionarTienda}
                    setIsOpenRegistrarProducto={setIsOpenRegistrarProducto}
                    setIsOpenModificarProducto={setIsOpenModificarProducto}
                />
                <ModificarProductoModals
                    isOpen={IsOpenModificarProducto}
                    setClose={()=>setIsOpenModificarProducto(false)}
                    setIsOpenMenuGestionarTienda={setIsOpenMenuGestionarTienda}
                    setIsOpenRegistrarProducto={setIsOpenRegistrarProducto}
                    setIsOpenModificarProducto={setIsOpenModificarProducto} 
                />
            </>
        )
    }


    return (
        <div className="div-pwd-principal">
            <div className="div-pwd-title">
                <h2>INGRESE LA CONTRASEÑA PARA ACCEDER AL PANEL</h2>
            </div>

            <div className="div-pwd-input">
                <input 
                    type="text" 
                    name="password" 
                    placeholder="ingresa la contraseña"
                    className="input-pwd"
                    autoFocus
                    onChange={(e)=>handlePassword(e.currentTarget.name,e.currentTarget.value)}
                    onKeyDown={(e)=>{
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleCheck();
                        }}}
                />
                <button
                    className="button-pwd"
                    onClick={(e)=>{
                        e.preventDefault()
                        handleCheck()
                    }}>Ingresar
                </button>
            </div>

        </div>
    )
} 

export default GestionarProductosModals;