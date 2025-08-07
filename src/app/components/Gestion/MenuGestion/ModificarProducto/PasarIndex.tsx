import { ProductoInterface } from "@/app/interfaces/ProductoInterface"
import MostrarProducto from "./MostrarProducto"
import EditarProducto from "./EditarProducto"
import {useEffect, useState } from "react"
import { obtenerProductos } from "@/app/firebase/Promesas"

const InitialStateProducto:ProductoInterface = {
    nombre: "",
    codigoQR: "",
    precio: "",
    cantidad: "",
}

export const PasarIndex = () => {
    const [Productos, setProductos] = useState<ProductoInterface[]>([])
    const [Producto, setProducto] = useState(InitialStateProducto)
    const [IndexFila, setIndexFila] = useState(Number)
    const [IsOpen, setIsOpen] = useState(false)

    const handleGuardarIndex = (producto:ProductoInterface, index: number) => {
        setProducto(producto);
        setIndexFila(index);
        setIsOpen(true);
        console.log("Producto seleccionado:", producto)
        console.log("Índice de la fila:", index)
    }

    useEffect(() => {
        cargarProductos();
    }, []);
    
    const cargarProductos = () => {
        obtenerProductos().then(setProductos)
        .catch((error) => {
            alert("Error al cargar los productos")
            console.log(error)
        });
    };

    // Nueva función para cerrar y refrescar productos
    const handleCloseAndRefresh = () => {
        setIsOpen(false);
        cargarProductos(); // Vuelve a cargar la lista actualizada
    }

    return (
        <div>
            <MostrarProducto productos={Productos} obtenerIndex={handleGuardarIndex}/>
            {IsOpen && IndexFila !== null && (
                <EditarProducto 
                    isOpen={IsOpen} 
                    setClose={handleCloseAndRefresh} 
                    producto={Producto} 
                    index={IndexFila} 
                />
            )}
        </div>
    )
}