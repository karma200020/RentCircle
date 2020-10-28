import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

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
  hidePassword1 = true;
  hidePassword2 = true;
  data = [];

  messagePass = 'Successfully Signed Up ! Welcome to Rent Circle !';
  messageFail = ' Uh oh! Something went wrong !';

    constructor(fb: FormBuilder,
                private authService: AuthService,
                private _snackBar: MatSnackBar,
                ) {
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

        if(this.options.valid){
          this.authService.signUpReqObj = {};
          this.authService.signUpReqObj.email = this.email.value;
          this.authService.signUpReqObj.password1 = this.password.value;
          this.authService.signUpReqObj.password2 = this.rpassword.value;
          this.authService.signUpReqObj.first_name = this.fname.value;
          this.authService.signUpReqObj.last_name = this.lname.value;
          this.authService.signUpReqObj.username = this.email.value;
          this.authService.signup();
          if(!this.authService.singupFail){
            this.openSnackBar(this.messagePass);
          }
          else{
            this.openSnackBar(this.messageFail);
          }
        }


    }

    openSnackBar(message: string, ): void {
      this._snackBar.open(message, '', {
        duration: 2000,
      });
    }

}
