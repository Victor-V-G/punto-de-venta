import { ProductoInterface } from "../ProductoInterface";


export interface FacturaInterface {
    fecha: string;
    hora: string;
    productos: ProductoInterface[];
    total: number;
}
