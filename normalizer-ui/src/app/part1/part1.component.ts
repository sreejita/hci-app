import { Component, OnInit } from '@angular/core';
import { Part1Service } from './part1.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  title = 'Shop for your Living Room';
  chair = '';
  table = '';
  email = '';
  constructor(private part1Service: Part1Service,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //getStuffFromBackend -> if email id exists set the above vars; else do nothing
    this.email = this.route.snapshot.params.email;
    console.log(this.email);
  }

  setChair(chair) {
    this.chair = chair;
    console.log('Chair:', chair);
  }

  setTable(table) {
      this.table = table;
      console.log('Table:', table);
  }

}
