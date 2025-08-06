'use client'
import { useEffect, useState } from "react";
import { PasswordInterface } from "../../interfaces/PasswordInterface";
import { ValidPropsExtends } from "../../interfaces/extends/ValidPropsExtends";
import MenuGestionarTiendaModals from "../modalsGestion/MenuGestionarTiendaModals";
import RegistrarProductoModals from "../modalsGestion/RegistrarProductoModals";
import ModificarProductoModals from "../modalsGestion/ModificarProductoModals";

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
            <div>
                <h1>GESTIONAR TIENDA</h1> <br />
                <h3>INGRESE LA CONTRASEÑA PARA ACCEDER AL PANEL</h3>
            </div>

            <div>
                <label>Contraseña</label>
                <input 
                    type="text" 
                    name="password" 
                    placeholder="ingresa la contraseña"
                    className="pwd-input"
                    onChange={(e)=>handlePassword(e.currentTarget.name,e.currentTarget.value)}
                />
                <span>{}</span>
                <button
                    className="pwd-button"
                    onClick={()=>{
                        handleCheck()
                    }}>Ingresar
                </button>
            </div>

        </div>
    )
} 

export default GestionarProductosModals;