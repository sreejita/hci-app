import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { Product } from '../models/part1.interface';

@Injectable({
  providedIn: 'root'
})
export class Part1Service {

    products: Product[] = [
        {
            name: 'Basic Chair',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$23',
            category: 'chair',
            imagename: 'assets/images/chair1.jpg'
        },
        {
            name: 'Adjustable Chair',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$45',
            category: 'chair',
            imagename: 'assets/images/chair2.jpg'
        },
        {
            name: 'Ergonomic Chair',
            description: '.......................................................',
            price: '$99',
            category: 'chair',
            imagename: 'assets/images/chair3.jpg'
        },
        {
            name: 'Basic Table',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$23',
            category: 'table',
            imagename: 'assets/images/coffeetable1.jpg'
        },
        {
            name: 'Adjustable Table',
            description: 'Some quick example text.',
            price: '$45',
            category: 'table',
            imagename: 'assets/images/coffeetable2.jpg'
        },
        {
            name: 'Ergonomic Table',
            description: '.......................................................',
            price: '$99',
            category: 'table',
            imagename: 'assets/images/coffeetable3.jpg'
        },
        {
            name: 'Adjustable Chair',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$45',
            category: 'couch',
            imagename: 'assets/images/couch1.jpg'
        },
        {
            name: 'Ergonomic Chair',
            description: '.......................................................',
            price: '$99',
            category: 'couch',
            imagename: 'assets/images/couch2.jpg'
        },
        {
            name: 'Basic Table',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$23',
            category: 'couch',
            imagename: 'assets/images/couch3.jpg'
        },
        {
            name: 'Adjustable Chair',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$45',
            category: 'tv',
            imagename: 'assets/images/TV1.jpg'
        },
        {
            name: 'Ergonomic Chair',
            description: '.......................................................',
            price: '$99',
            category: 'tv',
            imagename: 'assets/images/TV2.jpg'
        },
        {
            name: 'Basic Table',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$23',
            category: 'tv',
            imagename: 'assets/images/TV3.jpg'
        },
        {
            name: 'Adjustable Chair',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$45',
            category: 'cabinet',
            imagename: 'assets/images/storagecabinet2.jpg'
        },
        {
            name: 'Ergonomic Chair',
            description: '.......................................................',
            price: '$99',
            category: 'cabinet',
            imagename: 'assets/images/storagecabinet2.jpg'
        },
        {
            name: 'Basic Table',
            description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            price: '$23',
            category: 'cabinet',
            imagename: 'assets/images/storagecabinet3.jpg'
        }
    ];
    //products: Product[];

  constructor(private http: HttpClient) { }
    getProductByCategory(category): Product[] {
      const selectedProducts: Product[] = [];
      this.products.forEach((product: Product) => {
          if (product.category === category) {
            selectedProducts.push(product);
          }
        });
      return selectedProducts;
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
