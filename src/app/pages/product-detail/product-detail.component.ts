import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  active = 0;
  options: FormGroup = this.builder.group({
    delivery: ['', Validators.required]
});;
  currentRate = 3.14;
  item;
  poster;
  dataLoaded: Promise<boolean>;



  @ViewChild('nav', {static: false})  NgbNav: NgbNav;

  product = {
    images : [
        {
          path : 'assets/images/product/flat1.jpeg'
        },
        {
          path : 'assets/images/product/flat1.jpeg'
        },
        {
          path : 'assets/images/product/flat1.jpeg'
        },
        {
          path : 'assets/images/product/flat1.jpeg'
        },
         {
          path : 'assets/images/product/flat1.jpeg'
        },
        {
          path : 'assets/images/product/flat1.jpeg'
        },
        {
          path : 'assets/images/product/flat1.jpeg'
        },
    ]
  }

  constructor(
              public dialog: MatDialog,
              private builder: FormBuilder,
              public route: ActivatedRoute,
              public posts: PostServiceService,
              ) { }

  ngOnInit(): void {

    this.dataLoaded = Promise.resolve(false); 

    this.route.queryParams.subscribe(params => {
      this.posts.getItem(params['id']).subscribe(
        x => {
          console.log(x.body[0]);
          this.item = x.body[0];
          this.poster = x.body[0].owner;
          this.dataLoaded = Promise.resolve(true); 
          this.currentRate = x.body[0].rating
        },
        err => console.log(err)
      )
      console.log(this.posts.getItem(params['id']));
    
    });
  }

  goToSlide(slide) {
    if (slide + 1 >= this.product.images.length) {
  this.NgbNav.select(0);
    } else {
    this.NgbNav.select(slide);
  }
}
goToSlide2(slide) {
    if (slide - 1 < -1) {
  this.NgbNav.select(this.product.images.length - 1);

} else {
    this.NgbNav.select(slide);
  }
}
openDialog() {
  const dialogRef = this.dialog.open(CheckoutDialog);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'checkout.html',
  styleUrls: ['./checkout.scss']
})
export class CheckoutDialog {}
