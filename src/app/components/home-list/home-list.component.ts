import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  desc: string;
  rating: number;
  name: string;
  item: string;
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  tiles: Tile[] = [
    {desc: 'One', cols: 4, rows: 1, color: 'white', rating: 5, name: 'alex', item: 'Power Tools'},
    {desc: 'Two', cols: 1, rows: 2, color: 'white', rating: 5, name: 'alex', item: 'Power Tools'},
    {desc: 'Three', cols: 2, rows: 1, color: 'white', rating: 5, name: 'alex', item: 'Power Tools'},
    {desc: 'Four', cols: 2, rows: 1, color: 'white', rating: 5, name: 'alex', item: 'Power Tools'},
  ];

  ngOnInit(): void {
  }


}
