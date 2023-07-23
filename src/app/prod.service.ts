import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Prod } from './prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private baseURL = "http://localhost:8090/api/v1/Produits";
  private FURL = "http://localhost:8090/api/v1/findProduits/";

  constructor(private httpClient: HttpClient) { }
  
  getProduitsList(): Observable<Prod[]>{
    return this.httpClient.get<Prod[]>(`${this.baseURL}`);
  }
  createProduit(Prod: Prod): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, Prod);
  }
  getProduitById(id: number): Observable<Prod>{
    return this.httpClient.get<Prod>(`${this.baseURL}/${id}`);
  }

  updateProduit(id: number, Prod: Prod): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, Prod);
  }

  deleteProduit(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  getProduitByNom(nom: string): Observable<Prod>{
    return this.httpClient.get<Prod>(`${this.FURL}/${nom}`);
  }
}
