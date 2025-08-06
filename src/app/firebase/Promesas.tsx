import {doc, collection, addDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from "./Conexion";
import { ProductoInterface } from "../interfaces/ProductoInterface";

export const registrarProducto = async(producto:ProductoInterface)=> {
    const docRef = await addDoc(collection(db, "productos"), producto);
    console.log("Producto registrado con ID: ", docRef.id);
}