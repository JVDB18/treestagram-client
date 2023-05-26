import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
data: object = {};
private dataSubject = new BehaviorSubject<object>(this.data)
public currentData = this.dataSubject.asObservable();
  constructor(private http: HttpClient) { }
  updateDataSubject(newDatas: object){
    this.dataSubject.next(newDatas);
  }
  sendFile(file: File, description: string, username: string, localisation: string):Observable<object> {

    const formData = new FormData();
    formData.append('username', username)
    formData.append('localisation', localisation)
    formData.append('description', description)
    formData.append('file', file);
    return this.http.post("http://localhost:8080/post/add", formData);
  }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:8080/post/all")
  }
  getPostsByUsername(username: string | null): Observable<Post[]>{
    return this.http.get<Post[]>(`http://localhost:8080/post/user/${username}`)
  }
}
