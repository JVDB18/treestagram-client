import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private _auth : AuthService){}
  ngOnInit(): void {
    this._auth.isLog$.subscribe(res => {
      this.isLoggedIn = res;
      console.log(this.isLoggedIn);
    })

    if(localStorage.getItem('token') !== null){
      this.isLog()
    }
  }
  username: string | null = localStorage.getItem("username");
  isCollapsed: boolean = false
  isLoggedIn!: boolean;
  isLog(){
    this._auth.updateIsLoggedIn(true);
  }
  disconnect(){

    this._auth.disconnect();
  }
}
