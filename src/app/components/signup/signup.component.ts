import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  rpassword = new FormControl('', Validators.required);
  fname = new FormControl('', Validators.required);
  lname = new FormControl('', Validators.required);
  options: FormGroup;

    constructor(fb: FormBuilder) {
      this.options = fb.group({
          email: this.email,
          fname: this.fname,
          lname: this.lname,
          password: this.password,
          rpassword: this.rpassword
      });
    }


    ngOnInit(): void {
    }

    onSubmitModelBased(): void {
        console.log('model-based form submitted');
        console.log(this.options);
    }

}
