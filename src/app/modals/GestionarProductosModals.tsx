'use client'
import { useState } from "react";
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
        if (password.password === '123'){
            alert("contraseña correcta")
            setValid(true)
        } else {
            alert("contraseña incorrecta")
            setValid(false)
        }
    }

    if (isOpen == false){
        return null
    } 

    if (Valid == true) {
        return <MenuGestionarTienda/>
    }

    return (
        <div>
            <h1>hola {password.password}</h1>
            <input 
                type="text" 
                name="password" 
                placeholder="password"
                onChange={(e)=>handlePassword(e.currentTarget.name,e.currentTarget.value)}
            />
            <button 
                onClick={()=>{
                    handleCheck()
                }}>Ingresar
            </button>
        </div>
    )
} 

export default GestionarProductosModals;