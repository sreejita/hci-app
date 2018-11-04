import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  postText(filetext) {
      console.log('filetext' + JSON.stringify(filetext));
      const formdata: FormData = new FormData();

      formdata.append('filetext', filetext);

      const req = new HttpRequest('POST', 'api/file', formdata, {
          reportProgress: true,
          responseType: 'text'
      });
      return this.http.request(req);
  }
  getText() {
      return this.http.get('/api/file');
  }
}
