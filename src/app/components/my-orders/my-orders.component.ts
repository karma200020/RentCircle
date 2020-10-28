import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  currentRate = 0;
  items = [1, 1, 1, 1, 1, 1, 1];

  constructor() { }

  ngOnInit(): void {
  }

}
