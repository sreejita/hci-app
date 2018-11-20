import {Component, OnInit} from '@angular/core';
import {faHome} from '@fortawesome/fontawesome-free-solid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  faHome;
    ngOnInit() {
      this.faHome = faHome;
    }
}
