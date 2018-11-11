import { Component, OnInit } from '@angular/core';
import { IntroOneService } from './introOne.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-intro-file',
  templateUrl: './introOne.component.html',
    template: `
    <button (click)="goToShop()">Proceed to Experiment-1 Part-1</button>`,
  styleUrls: ['./introOne.component.css']
})
export class IntroOneComponent implements OnInit {

  title = 'Welcome to HCI Lab';
  name = '';
  paymentMethod;
  email;
  constructor(private uploadService: IntroOneService, private route: ActivatedRoute,
              private router: Router) {this.email = this.route.snapshot.params.email;
              this.paymentMethod = this.route.snapshot.params.paymentMethod;
  }

  ngOnInit() {

  }
  getName() {
    this.uploadService.getName().subscribe( (response: any) => {
      this.name = response.name;
      console.log(this.name);
    } );
  }

    goToShop() {
        this.router.navigateByUrl('/part1/email');
    }

}
