import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IImagenInterface } from 'src/app/core/models/IImagen.interface';
import baseUrl from '../baseUrl';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http:HttpClient) { }

  public addImages(imagenes:IImagenInterface[]){
    return this.http.post(`${baseUrl}8084/imagenes`,imagenes);
  }

  public updateImages(imagenes:IImagenInterface[]){
    return this.http.put(`${baseUrl}8084/imagenes`,imagenes);
  }
  
  public getImages(){
    return this.http.get(`${baseUrl}8084/imagenes`);
  }

  public getImagesByProductoId(id:number){
    return this.http.get(`${baseUrl}8084/imagenes/producto/${id}`);
  }
}
