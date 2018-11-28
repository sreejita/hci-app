import {Component, Input, OnInit} from '@angular/core';
import { Checkout2Service } from './checkout2.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/parts.interface';
import {faWallet} from '@fortawesome/fontawesome-free-solid';
import {faMoneyBillAlt} from '@fortawesome/fontawesome-free-solid';
import {faArrowLeft} from '@fortawesome/fontawesome-free-solid';

@Component({
  selector: 'app-checkout2',
  templateUrl: './checkout2.component.html',
  styleUrls: ['./checkout2.component.css']
})
export class Checkout2Component implements OnInit {

  title = 'Payment';
  @Input() paymentMethod;
  @Input() email;
  @Input() selectedProducts: Product[];
  total;
  dw2Click: boolean;
    faWallet;
    faCash;
    faBack;
  enteredTotal;
  constructor(private checkout2Service: Checkout2Service, private route: ActivatedRoute,
              private router: Router) {
              this.email = this.route.snapshot.params.email;
              this.paymentMethod = this.route.snapshot.params.paymentMethod;
  }

  ngOnInit() {
      // this.selectedProducts = this.checkout1Service.getOrderDetails(this.paymentMethod, this.email);
      this.total = this.checkout2Service.getTotal(this.selectedProducts);
      this.total = this.total.substring(0, this.total.indexOf('.') + 3);
      console.log(this.total);
      this.faWallet = faWallet;
      this.faCash = faMoneyBillAlt;
      this.faBack = faArrowLeft;
  }

  goToPart2() {
      const message = 'User Clicked Back to Change Selection';
      this.checkout2Service.postData(message, this.email).subscribe(response => {
          this.router.navigate(['/part2' , this.paymentMethod, this.email]);
      });
  }

    goToEnd() {
     //call service to mark that user ended part1
      this.checkout2Service.postData(this.selectedProducts, this.email).subscribe(response => {

          this.router.navigate(['/end', this.paymentMethod, this.email]);
      });
    }

    clickDw2() {
      this.dw2Click = true;
      console.log(this.total);
    }
}
