import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMarcaInterface } from 'src/app/core/models/IMarca.interface';
import baseUrl from '../baseUrl';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http:HttpClient) { }

  public addMarca(marca:IMarcaInterface): Observable<IMarcaInterface> {
    return this.http.post<IMarcaInterface>(`${baseUrl}8083/marcas`,marca);
  }

  public updateMarca(marca:IMarcaInterface): Observable<IMarcaInterface> {
    return this.http.put<IMarcaInterface>(`${baseUrl}8083/marcas`,marca);
  }
  
  public getMarcas(): Observable<IMarcaInterface[]>{
    return this.http.get<IMarcaInterface[]>(`${baseUrl}8083/marcas`);
  }

  public getMarcaById(id:number): Observable<IMarcaInterface> {
    return this.http.get<IMarcaInterface>(`${baseUrl}8083/marcas/${id}`);
  }

}
