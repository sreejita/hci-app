import { Component, OnInit } from '@angular/core';
import { IntroOneService } from './introOne.service';
import { Router } from '@angular/router';

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


  constructor(private uploadService: IntroOneService,
              private router: Router) { }

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
