import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetailerServiceService {

  private baseUrl = 'http://localhost:8080/retailer/addRetailer';

  constructor(private http:HttpClient) { }

  login(RetailerClass:any):Observable<any>
  {
    return this.http.post(`http://localhost:8080/retailer/retailers`,RetailerClass)
  }

  saveRetailer(RetailerClass: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, RetailerClass);
  }

  isRetailerLoggedIn() {
    let retailer = sessionStorage.getItem('rname')
    console.log(!(retailer === null))
    return !(retailer === null)
  }

  logOut() {
    sessionStorage.removeItem('rname')
  }

  findallretailers() {

    return this.http.get(`http://localhost:8080/retailer/findAllRetailers`)
  }

  private baseUrl1 = 'http://localhost:8080/retailer/delete';
  deleteretailer( id: any): Observable<any> {

    return this.http.delete(`${this.baseUrl1}/${id}`,{ responseType: 'text' });
  }
}
