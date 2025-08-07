import { ProductoInterface } from "@/app/interfaces/ProductoInterface"
import MostrarProducto from "./MostrarProducto"
import EditarProducto from "./EditarProducto"
import {useEffect, useState } from "react"
import { eliminarProducto, obtenerID, obtenerProductos } from "@/app/firebase/Promesas"
import { InterfaceID } from "@/app/interfaces/InterfaceID"

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
    const [AlmacenarIDS, setAlmacenarIDS] = useState<InterfaceID[]>([]);

    const handleGuardarIndex = (producto:ProductoInterface, index: number) => {
        setProducto(producto);
        setIndexFila(index);
        setIsOpen(true);
        console.log("Producto seleccionado:", producto)
        console.log("Índice de la fila:", index)
    }

    useEffect(() => {
        cargarProductos();
        cargarIDs();
    }, []);

    const cargarIDs = () => {
        obtenerID().then(setAlmacenarIDS)
        .catch((error) => {
            alert("Error al cargar los IDs")
            console.log(error)
        });
    };

    const handleEliminarProducto = (index: number) => {
        const id = AlmacenarIDS[index];
        if (!id) {
            alert("No se encontró el ID del producto");
            return;
        }
        eliminarProducto(id).then(() => {
            alert("Producto eliminado correctamente");
            cargarProductos();
            cargarIDs();
        }).catch((error) => {
            alert("Error al eliminar el producto");
            console.log(error);
        });
    };

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
            <MostrarProducto 
                productos={Productos} 
                obtenerIndex={handleGuardarIndex}
                eliminarProducto={handleEliminarProducto}
            />
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