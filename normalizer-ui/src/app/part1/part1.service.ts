import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { Product } from '../models/part1.interface';

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
}
