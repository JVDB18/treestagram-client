import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  imgSelected!: File;
  imgPreview! : any;
  desc! : string;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  onFileChanged(event: any) {
    console.log(event);
    this.imgSelected = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL( this.imgSelected );
    reader.onload =  (event) => {this.imgPreview = reader.result};
  }

  onUpload(){
    if( this.imgSelected ){

      console.log(this.imgSelected)
      this.api.sendFile(this.imgSelected, this.desc, 'jvdb').subscribe((next) => console.log(next));

    }
  }
}
