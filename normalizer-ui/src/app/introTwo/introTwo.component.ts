import { Component, OnInit } from '@angular/core';
import { IntroTwoService } from './introTwo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-intro2-file',
  templateUrl: './introTwo.component.html',
  styleUrls: ['./introTwo.component.css']
})
export class IntroTwoComponent implements OnInit {

  title = 'Introduction to Part2 of the experiment';
  paymentMethod;
  email;
  constructor(private introTwoService: IntroTwoService, private route: ActivatedRoute,
              private router: Router) {
              this.paymentMethod = this.route.snapshot.params.paymentMethod;
              this.email = this.route.snapshot.params.email;
  }

  ngOnInit() {

  }

  goToPart2() {
      //call service to mark that user started part1
      const message = 'User Started Experiment 2';
      this.introTwoService.postData(message, this.email).subscribe(response => {
          this.router.navigate(['/part2', this.paymentMethod, this.email]);
      });
  }

}
