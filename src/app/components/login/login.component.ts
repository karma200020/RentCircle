import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
    from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
  options: FormGroup;

    constructor(fb: FormBuilder) {
      this.options = fb.group({
          "email": this.email,
          "password":this.password
      });
    }


    ngOnInit(): void {
    }

    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.options);
    }

}
