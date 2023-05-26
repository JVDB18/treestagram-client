import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/model/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public username!:string | null;
  public posts!: Post[];
constructor(private _activatedRoute : ActivatedRoute, private _apiService : ApiService){}
  ngOnInit(): void {
  this.getUser();
  this.getPostByUser();
  }
getUser(){
  this._activatedRoute.paramMap.subscribe(
    (res: ParamMap) => {
      this.username = res.get('username')
    }
  )

  if(this.username){
    console.log(this.username)
  }
}
getPostByUser(){
  this._apiService.getPostsByUsername(this.username).subscribe(
    {next: (res) => {
      this.posts = res;
      this.posts.reverse();
      console.log(res)
    }
  }
  )
}
}
