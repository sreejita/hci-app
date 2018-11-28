import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Product} from '../models/parts.interface';

@Injectable({
  providedIn: 'root'
})
export class Checkout2Service {
  constructor(private http: HttpClient) { }

  getOrderDetails(paymentMethod, email) {
    //
      const products: Product[] = [
          {
              name: 'Basic Chair',
              description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
              price: '$23',
              category: 'chair',
              imagename: 'assets/images/chair1.jpg'
          },
          {
              name: 'Adjustable Table',
              description: 'Some quick example text.',
              price: '$45',
              category: 'table',
              imagename: 'assets/images/coffeetable2.jpg'
          }
      ];

      return products;
  }
  // getTotal(paymentMethod, email) {
  //   return '$68';
  // }

  getTotal(selectedProducts: Product[]) {
    let total = 0;
    selectedProducts.forEach((product: Product) => {
        if (product) {
            total = total + Number(product.price.replace('$', ''));
        }
    });
    return '$' + total;
  }
    postData(content, email) {
        const formdata: FormData = new FormData();

        formdata.append('content', JSON.stringify(content));

        const req = new HttpRequest('POST', 'api/write/' + email, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    }
}
