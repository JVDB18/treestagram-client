import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Post } from 'src/app/model/post';
import { ApiService } from 'src/app/services/api.service';

@Component({
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  data!: Post[] ;
  loading: boolean = true;
  dataSubject! : object;
 constructor(private _apiService : ApiService) {
 }
  ngOnInit(): void {
    this.getPosts();
    this._apiService.currentData.subscribe(dataSubject => {
      this.dataSubject = dataSubject;
      if(this.dataSubject != null) {
        let datas = this.getPosts();
        let data= datas[this.data.length -1]
        this.data.push(data)
      }
    })
  }
 getPosts():Post[]{
  this._apiService.getPosts().subscribe(data => {
    this.data = data;
    this.data.reverse();
  })
  this.loading = false;
  return this.data;
 }
 updatePosts():void{
  this._apiService.currentData.subscribe(dataSubject => {
    this.dataSubject = dataSubject;
    if(this.dataSubject != null) {
      let datas = this.getPosts();
      let data= datas[this.data.length -1]
      this.data.push(data)
    }
  })
 }
}
