import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent implements OnInit{
  username!: string | null;
  constructor(private _authService: AuthService){}
ngOnInit(): void {
  this._authService.username$.subscribe(username => {
    this.username = username;
    console.log(username)
  })
}

}
