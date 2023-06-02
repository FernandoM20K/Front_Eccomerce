import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISubcategoriaInterface } from 'src/app/core/models/ISubcategoria.interface';
import baseUrl from '../baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {

  constructor(private http:HttpClient) { }

  public addSubcategory(subcategory:ISubcategoriaInterface): Observable<ISubcategoriaInterface> {
    return this.http.post<ISubcategoriaInterface>(`${baseUrl}8081/subcategorias`,subcategory);
  }

  public updateSubcategory(subcategory:ISubcategoriaInterface): Observable<ISubcategoriaInterface> {
    return this.http.put<ISubcategoriaInterface>(`${baseUrl}8081/subcategorias`,subcategory);
  }

  public getSubcategories(): Observable<ISubcategoriaInterface[]> {
    return this.http.get<ISubcategoriaInterface[]>(`${baseUrl}8081/subcategorias`);
  }

  public getSubcategoryById(id:number): Observable<ISubcategoriaInterface> {
    return this.http.get<ISubcategoriaInterface>(`${baseUrl}8081/subcategorias/${id}`);
  }


  public deleteSubcategory(id:number): Observable<any> {
    return this.http.delete<any>(`${baseUrl}8081/subcategorias/${id}`);
  }
}
