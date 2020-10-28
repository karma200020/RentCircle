import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[ Validators.required]);
  options: FormGroup;
  hidePassword = true;
  messagePass = 'Successfully Logged In ! Welcome back !';
  messageFail = ' Uh oh! Please check your credentials !';

    constructor(fb: FormBuilder,
                private _snackBar: MatSnackBar,
                private router: Router,
                private authService: AuthService, ) {

      this.options = fb.group({
          'email': this.email,
          'password': this.password
      });
    }


    ngOnInit(): void {
    }

    onSubmitModelBased(): void {
        console.log('model-based form submitted');
        console.log(this.options);

        if(this.options.valid){
          this.authService.loginReqObj  = {};
          this.authService.loginReqObj.email = this.email.value;
          this.authService.loginReqObj.password = this.password.value;
          this.authService.login();
          console.log(this.authService.loginResObj);
          this.openSnackBar(this.messagePass);
        }
        else{
          this.openSnackBar(this.messageFail);
        }
        if(this.authService.loginFail){
          this.openSnackBar(this.messageFail);
        }

    }
    openSnackBar(message: string, ): void {
      this._snackBar.open(message, '', {
        duration: 2000,
      });
    }

}
