import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   genders = [ 'Male', 'Female', 'None' ];
   paymentTypes = ['Cash', 'Credit Card', 'Debit Card', 'Apple Pay', 'Google Pay', 'PayPal', 'Store Card/App'];
   degrees = ['Undergraduate', 'Graduate', 'None'];
   paymentMethod;
   profileForm = this.fb.group({
     name: ['', Validators.required],
     age: ['', Validators.required],
     email: ['', Validators.email],
     gender: ['', Validators.required],
     payment: ['', Validators.required],
     income: ['', Validators.required],
     degree: ['', Validators.required]
    });
  constructor(private userService: UserService, private route: ActivatedRoute,
              private router: Router, private fb: FormBuilder) {
      this.paymentMethod = this.route.snapshot.params.paymentMethod;
  }

  ngOnInit() {

  }

  postUserProfile() {
    this.profileForm.addControl('initPaymentMethodIs', this.fb.control(this.paymentMethod));
    console.warn(this.profileForm.value);
    const email = this.profileForm.value.email.match(/^([^@]*)@/)[1];
   // Send data to the server then route
    this.userService.postUserProfile(this.profileForm.value, email).subscribe(response => {
        this.router.navigate(['/intro1', this.paymentMethod, email]);
    });
  }

}
