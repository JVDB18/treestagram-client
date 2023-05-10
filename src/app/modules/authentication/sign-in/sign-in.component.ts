
import { Component } from '@angular/core';
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
  constructor(private authService : AuthService){}

  model : User = new User('', '', '');
  body! : any;
  submitted = false;
  token!: any


  connectUser() {
    this.submitted = true
    this.body = this.model;
    this.authService.login(this.body).subscribe((r: Token) => {
      this.token = r.token;
      this.authService.setToken(this.token);
      this.authService.updateIsLoggedIn(true);
      localStorage.setItem("username", this.model.username)
      console.log(localStorage.getItem("username ") + this.token)

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
}
