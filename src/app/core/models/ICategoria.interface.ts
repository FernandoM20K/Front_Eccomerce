import { ISubcategoriaInterface } from "./ISubcategoria.interface";

export interface ICategoriaInterface {
    categoriaId: number;
    nombre: string;
    descripcion?: string;
    imagen: string;
    subcategorias?: ISubcategoriaInterface[];
}