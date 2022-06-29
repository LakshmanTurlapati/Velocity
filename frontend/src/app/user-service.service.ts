import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserClass } from './user-class';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  email : string| any;

  private baseurl1 = 'http://localhost:8989/user/findByEmail';
  private baseUrl = 'http://localhost:8989/user/addUser';

  constructor(private http:HttpClient) { }

  login(UserClass:any):Observable<any>
  {
    return this.http.post(`http://localhost:8989/user/users`,UserClass)
  }

  saveUser(UserClass: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, UserClass);
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    this.email = sessionStorage.getItem('username')
    return !(user === null)

  }

  logOut() {
    sessionStorage.removeItem('username');
  }

  
  getUser(email: string): Observable<any> {
    return this.http.get(`${this.baseurl1}/${email}`);
  }

}
