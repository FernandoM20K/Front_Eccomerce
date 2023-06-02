import { IProductoCompradoInterface } from "./IProductoComprado.interface";

export interface IPedidoInterface {
    pedidoId: number;
    fechaPedido: Date;
    clienteId: number;
    listaProductosComprados: IProductoCompradoInterface[];
}