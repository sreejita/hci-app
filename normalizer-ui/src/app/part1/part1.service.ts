import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { Product } from '../models/parts.interface';

@Injectable({
  providedIn: 'root'
})
export class Part1Service {

    products: Product[];
    //products: Product[];

  constructor(private http: HttpClient) {
      this.getAllPart1Products();
  }

  getAllPart1Products() {
      this.http.get('/api/file/part1').subscribe((response: any) => {
          this.products = response;
      });
  }
    getProductByCategory(category): Product[] {
      const selectedProducts: Product[] = [];
      this.products.forEach((product: Product) => {
          if (product.category === category) {
            selectedProducts.push(product);
          }
        });
      return selectedProducts;
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
