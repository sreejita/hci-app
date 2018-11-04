import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getName() {
    return this.http.get('/api/name');
  }
  postUserProfile(postdata) {
      const formdata: FormData = new FormData();

      formdata.append('userprofile', postdata);

      const req = new HttpRequest('POST', 'api/profile', formdata, {
          reportProgress: true,
          responseType: 'text'
      });
      return this.http.request(req);
  }

}
