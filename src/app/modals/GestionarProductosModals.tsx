'use client'
import { useEffect, useState } from "react";
import MenuGestionarTienda from "../components/Gestion/MenuGestionarTienda";
import { PasswordInterface } from "../interfaces/PasswordInterface";
import { ValidPropsExtends } from "../interfaces/extends/ValidPropsExtends";

const InitialStatePassword:PasswordInterface={
    password:"",
}

export const GestionarProductosModals = ({isOpen, Valid, setValid} : ValidPropsExtends)=>{

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
            setValid(true)
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
        return <MenuGestionarTienda/>
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