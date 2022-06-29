import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8989/payment/payments';

  constructor(private http:HttpClient) { }

  savePayment(RetailerClass: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, RetailerClass);
  }

  findallPayments() {

    return this.http.get(`http://localhost:8989/payment/payments`);
  }
}
