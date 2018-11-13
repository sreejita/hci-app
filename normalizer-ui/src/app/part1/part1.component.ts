import { Component, OnInit } from '@angular/core';
import { Part1Service } from './part1.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Product} from '../models/part1.interface';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  navigationSubscription;
  categories = ['chair',  'table', 'couch', 'tv', 'cabinet'];
  title = 'Shop for your Living Room';
  email = '';
  paymentMethod = '';
  checkout = false;
  dataForm = this.fb.group({
    chair: ['', Validators.required],
    table: ['', Validators.required],
    couch: ['', Validators.required],
    tv: ['', Validators.required],
    cabinet: ['', Validators.required],
    });
  selectedProducts: Product[] = [];
  constructor(private part1Service: Part1Service, private fb: FormBuilder,
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
      return this.part1Service.getProductByCategory(category);
  }
  postPart1() {
    console.log(this.dataForm.value);
    this.selectedProducts = [];
    for (const category of this.categories) {
        this.selectedProducts.push(this.dataForm.value[category]);
    }
    console.log(this.selectedProducts);
    this.checkout = true;
      // Send data to the server then route
      // Do Not send data as it is prone to changes!!!!
      // Use a common bidirectional service instead (Only one instance, provided in root)?
      // this.router.navigate(['/checkout1', this.paymentMethod, this.email]);
  }

}
