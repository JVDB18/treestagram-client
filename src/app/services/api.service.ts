import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  sendFile(image: File, description: string, username: string) {

    const formData = new FormData();
    formData.append('username', username)
    formData.append('description', description)
    formData.append('image', image, image.name);
    return this.http.post("http://localhost:8080/photos/add", formData);
  }

  // getFile(id: number): Observable<HttpResponse<FileModel>> {
  //   return this.http.get("http://localhost:8080/img/"+id, { observe: 'response'}) as Observable<HttpResponse<FileModel>>;
  // }

  // getIds(): Observable<number[]>{
  //   return this.http.get("http://localhost:8080/img/ids") as Observable<number[]>;
  // }
}
