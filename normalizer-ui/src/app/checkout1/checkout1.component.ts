import {Component, Input, OnInit} from '@angular/core';
import { Checkout1Service } from './checkout1.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/parts.interface';
import {faWallet} from '@fortawesome/fontawesome-free-solid';
import {faMoneyBillAlt} from '@fortawesome/fontawesome-free-solid';
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid';

@Component({
  selector: 'app-checkout1',
  templateUrl: './checkout1.component.html',
  styleUrls: ['./checkout1.component.css']
})
export class Checkout1Component implements OnInit {

  title = 'Payment';
  faWallet;
  faCash;
  faBack;
  @Input() paymentMethod;
  @Input() email;
  @Input() selectedProducts: Product[];
  total;
  dw2Click: boolean;
  enteredTotal;
  constructor(private checkout1Service: Checkout1Service, private route: ActivatedRoute,
              private router: Router) {
              this.email = this.route.snapshot.params.email;
              this.paymentMethod = this.route.snapshot.params.paymentMethod;
  }

  ngOnInit() {
      // this.selectedProducts = this.checkout1Service.getOrderDetails(this.paymentMethod, this.email);
      this.total = this.checkout1Service.getTotal(this.selectedProducts);
      console.log(this.total);
      this.faWallet = faWallet;
      this.faCash = faMoneyBillAlt;
      this.faBack = faArrowLeft;
  }

  goToPart1() {
      const message = 'User Clicked Back to Change Selection';
      this.checkout1Service.postData(message, this.email).subscribe(response => {
          this.router.navigate(['/part1' , this.paymentMethod, this.email]);
      });
  }

  goToIntro2() {
     //call service to mark that user ended part1
      this.checkout1Service.postData(this.selectedProducts, this.email).subscribe(response => {
          console.log(this.total === this.enteredTotal);
          console.log(this.enteredTotal);
          this.router.navigate(['/intro2', this.paymentMethod, this.email]);
      });
    }

    clickDw2() {
      this.dw2Click = true;
      console.log(this.total);
    }
}
