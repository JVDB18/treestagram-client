import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: any
  constructor(private http: HttpClient) {
   }

  login(body: any):Observable<any>{
    return this.http.post("http://localhost:8080/auth/sign_in", body)
  }
  getToken(token:string){
    this.token = localStorage.setItem("token", token);
  }
}
