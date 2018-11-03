import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-file',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Connection to Component from HTML';
  name = '';
  shouldShow = false;
  constructor(private uploadService: MainService,
              private router: Router) { }

  ngOnInit() {

  }
  getName() {
    //this.shouldShow = true;
    this.uploadService.getName().subscribe( response => {
      this.name = response.name;
      console.log(this.name);
    } );
  }

}
