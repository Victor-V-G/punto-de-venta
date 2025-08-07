import {doc, collection, addDoc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
import { db } from "./Conexion";
import { ProductoInterface } from "../interfaces/ProductoInterface";
import { InterfaceID } from "../interfaces/InterfaceID";
import { FacturaInterface } from "../interfaces/Venta/FacturaInterface";

export const registrarProducto = async(producto:ProductoInterface)=> {
    const docRef = await addDoc(collection(db, "Productos"), producto);
    console.log("Producto registrado con ID: ", docRef.id);
}

export const registrarFactura = async(factura:FacturaInterface)=> {
    const docRef = await addDoc(collection(db, "Facturas"), factura);
    console.log("Factura registrada con ID: ", docRef.id);
}



export const obtenerProductos = async () => {
    let listadoObtenido: ProductoInterface[]  = []
        const querySnapshot = await getDocs(collection(db, "Productos"));
        querySnapshot.forEach((doc) => {
        let producto:ProductoInterface = {
            nombre: doc.data().nombre,
            codigoQR: doc.data().codigoQR,
            precio: doc.data().precio,
            cantidad: doc.data().cantidad,
        }
        listadoObtenido.push(producto);
        console.log(doc.id, " => ", doc.data());
    });
return listadoObtenido;
}


export const obtenerID = async() => {
    let idsDocumento:InterfaceID[] = []
        const querySnapshot = await getDocs(collection(db, "Productos"));
        querySnapshot.forEach((doc) => {

        let idDocumentoObtenido:InterfaceID = {
            idDocumento: doc.id
        }
        idsDocumento.push(idDocumentoObtenido);
        console.log("ID del documento: ", doc.id);
        });
return idsDocumento;
}   


export const modificarProducto = async(id:InterfaceID,nuevosDatos:ProductoInterface) => {
    const docRef = doc(db, "Productos", id.idDocumento);
    await updateDoc(docRef, {
        nombre: nuevosDatos.nombre,
        codigoQR: nuevosDatos.codigoQR,
        precio: nuevosDatos.precio,
        cantidad: nuevosDatos.cantidad,
    });
    console.log("Producto modificado con ID: ", id.idDocumento);
}


export const eliminarProducto = async(id:InterfaceID) => {
    await deleteDoc(doc(db, "Productos", id.idDocumento));
    console.log("Producto eliminado con ID: ", id.idDocumento);
}
