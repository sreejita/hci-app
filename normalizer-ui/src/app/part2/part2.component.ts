import { Component, OnInit } from '@angular/core';
import { Part2Service } from './part2.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Product} from '../models/parts.interface';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {
  navigationSubscription;
  categories = ['appetizer',  'entree', 'beer', 'dessert', 'sides', 'drink'];
  title = 'Build a meal';
  email = '';
  paymentMethod = '';
  checkout = false;
  dataForm = this.fb.group({
      appetizer: ['', Validators.required],
      entree: ['', Validators.required],
      beer: ['', Validators.required],
      dessert: ['', Validators.required],
      sides: ['', Validators.required],
      drink: ['', Validators.required],
    });
  selectedProducts: Product[] = [];
  constructor(private part2Service: Part2Service, private fb: FormBuilder,
              private router: Router, private route: ActivatedRoute) {
      this.navigationSubscription = this.router.events.subscribe((e: any) => {
          // If it is a NavigationEnd event re-initalise the component
          if (e instanceof NavigationEnd) {
              this.checkout = false;
          }
      });
  }

  ngOnInit() {
    //getStuffFromBackend -> if email id exists set the above vars; else do nothing
    this.checkout = false;
    this.email = this.route.snapshot.params.email;
    this.paymentMethod = this.route.snapshot.params.paymentMethod;
    console.log(this.email);
  }


  getProductByCategory(category) {
      return this.part2Service.getProductByCategory(category);
  }

  isDataAvailable() {
      if (this.part2Service.products) {
          return true;
      }
      return false;
  }
  postPart2() {
    console.log(this.dataForm.value);
    this.selectedProducts = [];
    for (const category of this.categories) {
        this.selectedProducts.push(this.dataForm.value[category]);
    }
    console.log(this.selectedProducts);


      this.part2Service.postData(this.selectedProducts, this.email).subscribe(response => {

          this.checkout = true;
      });

      // Send data to the server then route
      // Do Not send data as it is prone to changes!!!!
      // Use a common bidirectional service instead (Only one instance, provided in root)?
      // this.router.navigate(['/checkout1', this.paymentMethod, this.email]);
  }

}
