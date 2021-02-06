import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              public posts: PostServiceService,
              public cd: ChangeDetectorRef ) { 
                this.ctrl.setValue(2);
                
              }

  item;

  // mat-checkbox configuration variables

  checked = false;
  checked1 = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  category:string;
  availabilityf: boolean;
  todayf: boolean;

  // mat-slider configuration properties
  autoTicks = false;
  disabled2 = false;
  invert = false;
  max = 100000;
  min = 0;
  showTicks = false;
  step = 50;
  thumbLabel = false;
  vertical = false;
  tickInterval = 1;
  postsList;
  searchFilter: any = {};

  ctrl = new FormControl(null, Validators.required);



  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }



  ngOnInit(): void {

    this.searchFilter.minCost = 200;
    this.searchFilter.maxCost = 50000;
    this.searchFilter.category = '';
    this.searchFilter.item = '';
    this.searchFilter.itemId = '';
    




    this.route.params.forEach((urlParams) => {
      console.log(urlParams);



      if(!urlParams.category&& urlParams.item){
        this.searchItem(urlParams.item);
        this.searchFilter.item = urlParams.item;
  
      }

      if(!urlParams.category&& !urlParams.item){
        this.searchItem('');
      }

      console.log(this.category+this.item)



      
    });


  }

  filterless(event?: Event){
    this.searchFilter.maxCost = event;
    this.posts.getItembyFilter(this.searchFilter).subscribe(
      x => this.postsList = x.body
    )
  }

  filtermore(event?: Event){
    this.searchFilter.minCost = event;
    this.posts.getItembyFilter(this.searchFilter).subscribe(
      x => this.postsList = x.body
    )
  }

  searchItem(item){
    this.posts.search(item , this.category).subscribe(
      (res) => {
        console.log(res.body);
        this.postsList = res.body;
        this.posts.allpost = res.body;
        console.log("=============================");
        console.log(this.postsList);
        this.postsList = this.posts.allpost;
        this.posts.getItembyFilter(this.searchFilter).subscribe(
          x => this.postsList = x.body
        )
      }
      );
  }

  getDetail(item){
    this.router.navigate(['/productDetail'], { queryParams: { id: item.productId }});
    
  }

}
