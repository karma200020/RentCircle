import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {




  constructor(private formBuilder: FormBuilder) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  contactFormControl = new FormControl('', [
    Validators.required,
  ]);
  lnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  fnameFormControl = new FormControl('', [
    Validators.required,
  ]);
  locFormControl = new FormControl('', [
    Validators.required,
  ]);

ngOnInit(): void {
  }

}
