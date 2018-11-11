import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../models/part1.interface';

@Injectable({
  providedIn: 'root'
})
export class Checkout1Service {

  constructor(private http: HttpClient) { }
  getOrderDetails(paymentMethod, email) {
    //
      const products: Product[] = [
          {
              name: 'Basic Chair',
              description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
              price: '$23',
              imagename: 'assets/images/chair1.jpg'
          },
          {
              name: 'Adjustable Table',
              description: 'Some quick example text.',
              price: '$45',
              imagename: 'assets/images/coffeetable2.jpg'
          }
      ];

      return products;
  }
  getTotal(paymentMethod, email) {
    return '$68';
  }
}