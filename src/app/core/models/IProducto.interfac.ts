import { IImagenInterface } from "./IImagen.interface";
import { IMarcaInterface } from "./IMarca.interface";
import { ISubcategoriaInterface } from "./ISubcategoria.interface";

export interface IProductoInterface {
    productoId: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    estado: boolean;
    envioGratis: boolean;
    marcaId?: number;
    subcategoriaId?: number;
    imagenes: IImagenInterface[];
    marca: IMarcaInterface;
    subcategoria: ISubcategoriaInterface;
}