import { Component, OnInit } from '@angular/core';
import { Part1Service } from './part1.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/part1.interface';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})
export class Part1Component implements OnInit {
  title = 'Shop for your Living Room';
  chairDetails: Product[];
  tableDetails: Product[];
  chair = '';
  table = '';
  email = '';
  paymentMethod = '';
  constructor(private part1Service: Part1Service,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //getStuffFromBackend -> if email id exists set the above vars; else do nothing
    this.email = this.route.snapshot.params.email;
    this.paymentMethod = this.route.snapshot.params.paymentMethod;
    console.log(this.email);
    this.chairDetails = this.part1Service.getProductByCategory('chair');
    this.tableDetails = this.part1Service.getProductByCategory('table');
  }

  setChair(chair) {
    this.chair = chair;
    console.log('Chair:', this.chair);
  }

  setTable(table) {
      this.table = table;
      console.log('Table:', table);
  }

    postPart1() {

      // Send data to the server then route
      this.router.navigate(['/checkout1', this.paymentMethod, this.email]);
  }

}
