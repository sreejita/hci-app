import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

    postUserProfile(content, email) {
        const formdata: FormData = new FormData();

        formdata.append('content', JSON.stringify(content));

        const req = new HttpRequest('POST', 'api/write/' + email, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    }

}
