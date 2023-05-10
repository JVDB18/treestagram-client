import { Component } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
constructor(private _api : AuthService){

}
  model: User = new User("", "", "");

  submitted = false;


  newUser() {
    this.submitted = true
    console.log(this.model)
    this._api.signup(this.model).subscribe(res => {
      console.log(res);
    })

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
