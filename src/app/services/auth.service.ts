import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly url = environment.BASE_URL;

  loginReqObj;
  loginResObj;
  loginLoad = false;
  loginFail = false;

  signUpReqObj;
  signUpResObj;
  signUpLoad = false;
  singupFail = false;

  constructor(private httpClient: HttpClient,
              public  _cookie: CookieService,
              public router: Router,
              ) { }


  login(){
    this.httpClient.post<any>(this.url + 'dj-rest-auth/login/', this.loginReqObj, {observe: 'response'}).subscribe(
      (res) => {
        console.log(res);
        this.loginResObj = res;
        localStorage.setItem('access_token', this.loginResObj.body.access_token);
        localStorage.setItem('refresh_token', this.loginResObj.body.refresh_token);
        this.router.navigate(['/account/order']);
        this.loginLoad = false;

      },
      (err) => {
        console.log(err);
        this.loginLoad = false;
        this.loginFail = true;
      }
    );
    }


  signup(): void{

    console.log(this.signUpReqObj);

    this.httpClient.post<any>(this.url + 'dj-rest-auth/registration/', this.signUpReqObj)
    .subscribe(
      (res) => {
        console.log(res);
        this.signUpResObj = res;
        this.loginResObj = res;
        console.log(this.signUpResObj);
        this.router.navigate(['/account/order']);
        localStorage.setItem('access_token', this.loginResObj.access_token);
        localStorage.setItem('refresh_token', this.loginResObj.refresh_token);
        this.signUpLoad = false;
      },
      (err) => {
        console.log(err);
        this.signUpLoad = false;
        this.singupFail= true;
      }
    );
  }






}

