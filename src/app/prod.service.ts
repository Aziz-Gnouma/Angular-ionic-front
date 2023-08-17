import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Prod } from './prod';

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  private baseURL = "http://127.0.0.1:8000/api/Produit";
  private FURL = "http://localhost:8090/api/v1/findProduits/";

  constructor(private httpClient: HttpClient) { }
  
  getProduitsList(): Observable<Prod[]>{
    return this.httpClient.get<Prod[]>(`${this.baseURL}`);
  }
  
  createProduit(Prod: Prod): Observable<Object>{
    alert("Produit saved ");
    
    return this.httpClient.post(`${this.baseURL}`, Prod);
  }
  
  getProduitById(id: number): Observable<Prod>{
    return this.httpClient.get<Prod>(`${this.baseURL}/${id}`);
  }

  updateProduit(id: number, Prod: Prod): Observable<Object>{
   
    const confirmed = confirm("Updated produit !");
    if (confirmed) {
    return this.httpClient.put(`${this.baseURL}/${id}`, Prod);
  } else {
    return new Observable<Object>();
  }
  }

  deleteProduit(id: number): Observable<Object>{
    const confirmed = confirm("deleted produit !");
    if (confirmed) {
      return this.httpClient.delete(`${this.baseURL}/${id}`);
    } else {
      return new Observable<Object>();
    }
  }
  getProduitByNom(nom: string): Observable<Prod>{
    return this.httpClient.get<Prod>(`${this.FURL}/${nom}`);
  }
}
