import { Component, OnInit } from '@angular/core';
import { Checkout1Service } from './checkout1.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/part1.interface';

@Component({
  selector: 'app-checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.css']
})
export class Checkout1Component implements OnInit {

  title = 'Payment';
  paymentMethod;
  email;
  orderDetails: Product[];
  total;
  dw2Click: boolean;
  enteredTotal;
  constructor(private checkout1Service: Checkout1Service, private route: ActivatedRoute,
              private router: Router) {
              this.email = this.route.snapshot.params.email;
              this.paymentMethod = this.route.snapshot.params.paymentMethod;
  }

  ngOnInit() {
      this.orderDetails = this.checkout1Service.getOrderDetails(this.paymentMethod, this.email);
      this.total = this.checkout1Service.getTotal(this.paymentMethod, this.email);
  }

  goToPart1() {
      //call service to mark that user went back
      //call service to go to saved options in part1
  }

  goToIntro2() {
     //call service to mark that user ended part1
      console.log(this.total === this.enteredTotal);
      console.log(this.enteredTotal);
      this.router.navigate(['/part2', this.paymentMethod, this.email]);
    }

    clickDw2(){
      this.dw2Click = true;
      console.log(this.total);
    }


}
