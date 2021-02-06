import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  readonly url = environment.BASE_URL;
  allpost;
  reqObj;
  resObj;

  constructor(private httpClient: HttpClient,
              public  _cookie: CookieService,
              public router: Router,
              ) {

               }

  
  explore(){
    this.httpClient.get<any>(this.url + 'explore/',{observe: 'response'}).subscribe(
      (res) => {
       console.log(res);
        this.allpost = res.body;
      },
      (err) => {
       console.log(err);
      }
    );
    return this.allpost;
  }

  search(item: string, category: string){
    return this.httpClient.get<any>(this.url + 'explore?search=' + item, {observe: 'response'})
  }

  getItem(itemId: string){
    return this.httpClient.get<any>(this.url+'explore?productId='+itemId, {observe: 'response'})
  }

  getItembyFilter(searchCategory){
    return this.httpClient.get<any>(this.url+'explore/?min_cost='+searchCategory.minCost+'&max_cost='+searchCategory.maxCost+'&item='+ searchCategory.item +'&category=' + searchCategory.category +'&productId='+ searchCategory.itemId , {observe: 'response'})
  }

  postItem(item: any){
    return this.httpClient.post<any>(this.url + 'post/', item, {observe: 'response'} )
  }
}
