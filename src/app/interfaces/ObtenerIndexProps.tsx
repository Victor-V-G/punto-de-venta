import { ProductoInterface } from "./ProductoInterface";

export interface ObtenerIndexProps {
    productos: ProductoInterface[];
    obtenerIndex: (producto:ProductoInterface, index:number) => void;
    eliminarProducto: (index: number) => void;
}