
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { timeInterval, timeout } from 'rxjs';
import { Post } from 'src/app/model/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent {

  imgSelected!: File;
  imgPreview! : any;
  desc : string = " ";
  loca : string = " ";
  constructor(private _api: ApiService, private _router: Router) { }

  onFileChanged(event: any) {
    console.log(event);
    this.imgSelected = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL( this.imgSelected );
    reader.onload =  () => {this.imgPreview = reader.result};
  }

  onUpload(){
    if( this.imgSelected ){

      this._api.sendFile(this.imgSelected, this.desc, 'jvdb', this.loca).subscribe(
        data => {
          this._api.updateDataSubject(data);
        });
    }
    this._router.navigate(['']);
  }
}
