import { IProductoInterface } from "./IProducto.interfac";

export interface IProductoCompradoInterface {
    productoCompradoId: number;
    cantidad: number;
    subtotal: number;
    pedidoId: number;
    productoId: number;
    producto?: IProductoInterface;
}