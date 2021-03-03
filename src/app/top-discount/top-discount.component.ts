import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-discount',
  templateUrl: './top-discount.component.html',
  styleUrls: ['./top-discount.component.css']
})
export class TopDiscountComponent implements OnInit {
  display = 'block';
  showDiscountAgain: any;
  constructor() { }

  ngOnInit(): void {
  }
  handleClick() {
    this.display = 'none';
    this.showDiscountAgain = setInterval(() => {
      this.display = 'block';
    }, 10000)
  }

}
