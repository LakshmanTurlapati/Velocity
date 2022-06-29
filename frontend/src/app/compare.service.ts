import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  baseUrl = 'http://localhost:8989/compare/compareproducts';
  baseurl1 =  'http://localhost:8989/compare/deleteall';
  
  constructor(private http:HttpClient) { }

  getProductsList(): Observable<any> {

    //alert(this.http.get(`${this.baseUrl}`));
    return this.http.get(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteProduct(id: string| any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  newProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }

  deleteAll(): Observable<any> {
    
    return this.http.delete(`${this.baseurl1}`, { responseType: 'text' });
  }
}
