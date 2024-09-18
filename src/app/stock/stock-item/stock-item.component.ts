import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent implements OnInit {

  public name: string;
  public code: string;
  public price: number;
  public previusPrice: number;

  constructor() {}

  ngOnInit(): void {
    this.name = 'Test Stock Company';
    this.code = 'TSC';
    this.price = 85;
    this.previusPrice = 80;
  }


}
