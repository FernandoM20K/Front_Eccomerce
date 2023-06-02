import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../baseUrl';
import { ICategoriaInterface } from 'src/app/core/models/ICategoria.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http:HttpClient) { }
  
  public addCategory(data:ICategoriaInterface): Observable<ICategoriaInterface> {
    return this.http.post<ICategoriaInterface>(`${baseUrl}8080/categorias`, data);
  }

  public updateCategory(data:ICategoriaInterface): Observable<ICategoriaInterface> {
    return this.http.put<ICategoriaInterface>(`${baseUrl}8080/categorias`, data);
  }
  
  public getCategories(): Observable<ICategoriaInterface[]> {
    return this.http.get<ICategoriaInterface[]>(`${baseUrl}8080/categorias`);
  }

  public getCategory(id: number): Observable<ICategoriaInterface> {
    return this.http.get<ICategoriaInterface>(`${baseUrl}8080/categorias/${id}`);
  }


  public deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${baseUrl}8080/categorias/${id}`);
  }
}
