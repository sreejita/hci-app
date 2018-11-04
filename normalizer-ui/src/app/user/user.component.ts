import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  title = 'Participant Profile';
  name;
  email;
  gender;
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {

  }

  postUserProfile() {
    console.log(this.name + " " + this.email + " " + this.gender);
    const postdata = {
      'name' : this.name,
      'email' : this.email,
      'gender' : this.gender};
    console.log(JSON.stringify(postdata));
    this.userService.postUserProfile(JSON.stringify(postdata)).subscribe(response => {
        console.log(response);
    });
    this.router.navigate(['/part1', this.email]);
  }

}
