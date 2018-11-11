import { Component, OnInit } from '@angular/core';
import { IntroOneService } from './introOne.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-intro-file',
  templateUrl: './introOne.component.html',
  styleUrls: ['./introOne.component.css']
})
export class IntroOneComponent implements OnInit {

  title = 'Introduction to Part1 of the experiment';
  paymentMethod;
  email;
  constructor(private introOneService: IntroOneService, private route: ActivatedRoute,
              private router: Router) {
              this.paymentMethod = this.route.snapshot.params.paymentMethod;
              this.email = this.route.snapshot.params.email;
  }

  ngOnInit() {

  }

  goToPart1() {
      //call service to mark that user started part1
      this.router.navigate(['/part1', this.paymentMethod, this.email]);
  }

}
