import { Component } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  model : User = new User('', '');

  submitted = false;


  newUser() {
    this.submitted = true
    console.log(this.model)
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
