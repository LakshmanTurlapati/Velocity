import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  baseurl = "http://localhost:8989/products";
  baseurl1 = "http://localhost:8989/products/get";
  constructor(private http:HttpClient) { }

  getProducts()
  {
    return this.http.get('http://localhost:8989/products/products');
  }

  getProductByCategory(category:string): Observable<any> {

    return this.http.get(`${this.baseurl}/${category}`);

  }

  getProductByName(name:string): Observable<any> {

    return this.http.get(`${this.baseurl1}/${name}`);

  }
}
