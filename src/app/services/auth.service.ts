import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject(false)
  public isLog$: Observable<boolean> = this.isLoggedIn.asObservable();
  private token: BehaviorSubject<any>= new BehaviorSubject(localStorage.getItem("token"));
  private token$: Observable<string>= this.token.asObservable();
  constructor(private http: HttpClient) {
   }

  login(body: any):Observable<any>{
    return this.http.post("http://localhost:8080/auth/sign_in", body)
  }
  setToken(token:string){
    this.token.next(token)
    localStorage.setItem("token", token);
  }
  updateIsLoggedIn(islog:boolean){
    this.isLoggedIn.next(islog);
  }
  signup(body:User):Observable<object>{
    return this.http.post("http://localhost:8080/auth/sign_up", body);
  }
  disconnect(){
    this.isLoggedIn.next(false);
    localStorage.clear();
  }
}
