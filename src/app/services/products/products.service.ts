import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../baseUrl';
import { IProductoInterface } from 'src/app/core/models/IProducto.interfac';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  public addProduct(data:IProductoInterface): Observable<IProductoInterface> {
    return this.http.post<IProductoInterface>(`${baseUrl}8082/productos`, data);
  }

  public updateProduct(data:IProductoInterface): Observable<IProductoInterface> {
    return this.http.put<IProductoInterface>(`${baseUrl}8082/productos`, data);
  }

  public getProducts(): Observable<IProductoInterface[]> {
    return this.http.get<IProductoInterface[]>(`${baseUrl}8082/productos`);
  }

  public getProductsPaginated(page:number, size:number): Observable<IProductoInterface[]> {
    return this.http.get<IProductoInterface[]>(`${baseUrl}8082/productos/paginados?pageNo=${page}&pageSize=${size}`);
  }

  public getProductById(id:number): Observable<IProductoInterface> {
    return this.http.get<IProductoInterface>(`${baseUrl}8082/productos/${id}`);
  }

}
