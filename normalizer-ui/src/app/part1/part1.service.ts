import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { Product } from '../models/part1.interface';

@Injectable({
  providedIn: 'root'
})
export class Part1Service {

  constructor(private http: HttpClient) { }
    getProductByCategory(category) {
      const chairs: Product[] = [
              {
                  name: 'Basic Chair',
                  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                  price: '$23',
                  imagename: 'assets/images/chair1.jpg'
              },
              {
                  name: 'Adjustable Chair',
                  description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                  price: '$45',
                  imagename: 'assets/images/chair2.jpg'
              },
              {
                  name: 'Ergonomic Chair',
                  description: '.......................................................',
                  price: '$99',
                  imagename: 'assets/images/chair3.jpg'
              }
          ];

      const tables: Product[] = [
            {
                name: 'Basic Table',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
                price: '$23',
                imagename: 'assets/images/coffeetable1.jpg'
            },
            {
                name: 'Adjustable Table',
                description: 'Some quick example text.',
                price: '$45',
                imagename: 'assets/images/coffeetable2.jpg'
            },
            {
                name: 'Ergonomic Table',
                description: '.......................................................',
                price: '$99',
                imagename: 'assets/images/coffeetable3.jpg'
            }
        ];

      if (category === 'chair') {
          return chairs;
      }
      return tables;
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
