import { Injectable } from '@angular/core';
import {HttpClient, HttpRequest} from '@angular/common/http';
import { Product } from '../models/parts.interface';

@Injectable({
  providedIn: 'root'
})
export class Part2Service {

    products: Product[];

  constructor(private http: HttpClient) {
      this.getAllPart2Products();
  }

  getAllPart2Products() {
      this.http.get('/api/file/part2').subscribe((response: any) => {
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
