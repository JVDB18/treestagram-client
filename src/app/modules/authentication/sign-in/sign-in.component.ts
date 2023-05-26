
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Token } from 'src/app/model/token';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  constructor(private authService : AuthService, private _router: Router){}

  model : User = new User('', '', '');
  body! : any;
  submitted = false;
  token!: any
  error : boolean = false;


  connectUser() {
    this.body = this.model;

    this.authService.login(this.body).subscribe(
      {
        next: (r:Token)=>  {
          this.token = r.token;
          this.authService.setToken(this.token);
          if(this.token){
            this.submitted = true
          }
          this.authService.updateIsLoggedIn(true);
          this.authService.setUsername(this.model.username)
        }

      ,
      error : () => this.error= true
  });

  }
 showPassword() {
    let x = document.getElementById("password");
    if (x?.getAttribute("type") === "password") {
      x.setAttribute("type", "text");
    } else {
      x?.setAttribute("type", "password");
    }
  }
  afterClose(): void {
    console.log('close');
    this.error = false;
  }
  redirectToFeed(){
    this._router.navigate(['']);
  }
}
