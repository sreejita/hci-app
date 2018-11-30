import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-file',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'Welcome to this HCI experiment';
  name = '';
  cash = 'cash';
  dw1 = 'dw1';
  dw2 = 'dw2';
    cashClick() {
        this.router.navigate(['/profile', this.cash]);
    }

    dw1Click() {
        this.router.navigate(['/profile', this.dw1]);
    }

    dw2Click() {
        this.router.navigate(['/profile', this.dw2]);
    }

  constructor(private uploadService: MainService,
              private router: Router) { }

  ngOnInit() {

  }
    goToUserProfile() {
      this.router.navigateByUrl('/profile');
    }

}
