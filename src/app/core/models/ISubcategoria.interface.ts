import { ICategoriaInterface } from "./ICategoria.interface";
import { IProductoInterface } from "./IProducto.interfac";

export interface ISubcategoriaInterface {
    subcategoriaId: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    categoriaId?: number;
}