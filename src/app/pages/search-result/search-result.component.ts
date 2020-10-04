import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute, ) { }

  item;

  // mat-checkbox configuration variables

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  category:string;

  // mat-slider configuration properties
  autoTicks = false;
  disabled2 = false;
  invert = false;
  max = 100000;
  min = 0;
  showTicks = false;
  step = 50;
  thumbLabel = false;
  value = 200;
  vertical = false;
  tickInterval = 1;

  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }



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


    this.route.params.forEach((urlParams) => {
      this.item = urlParams.item;
      this.category = urlParams.category;
      console.log(urlParams);
    });
  }

}
