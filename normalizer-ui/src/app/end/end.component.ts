import { Component, OnInit } from '@angular/core';
import { EndService } from './end.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-file',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  title = 'Thank you for participating in our study!';
  constructor(private endService: EndService,
              private router: Router) { }

  ngOnInit() {

  }
    goToUserProfile() {
      this.router.navigateByUrl('/profile');
    }

}
