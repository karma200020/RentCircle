import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  currentRate = 4;
  quant = 1;

  cartItems = [1,1,1,1,1];

  constructor() { }

  increment(a){
    if(this.quant < 100){
      this.quant = this.quant + 1;
    }
  }

  decrement(a){

    if(this.quant > 0){
      this.quant = this.quant - 1;
    }
  }

  ngOnInit(): void {
  }

}
