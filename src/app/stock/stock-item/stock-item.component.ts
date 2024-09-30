import { Component, OnInit } from '@angular/core';

import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  // templateUrl: './stock-item.component.html',
  template: `
	<div class="stock-container">
	  <div class="name">{{stock.name + ' (' + stock.code + ')'}}</div>
	  <div class="price"
	      [class]="stock.isPositiveChange() ? 'positive' : 'negative'">
	      $ {{stock.price}}
   </div>
	  <button (click)="toggleFavorite($event)"
	          *ngIf="!stock.favorite">Add to Favorite</button>
	</div>
  `,
  styleUrl: './stock-item.component.css',
 })
export class StockItemComponent implements OnInit {
  // public stocks: Array<Stock>;
  public stock: Stock;

  constructor() {}

  ngOnInit() {
    // this.stocks = [
    //   new Stock('Test Stock Company', 'TSC', 85, 80),
    //   new Stock('Second Stock Company', 'SSC', 10, 20),
    //   new Stock('Last Stock Company', 'LSC', 876, 765)
    // ];

    this.stock = new Stock('Test Stock Company', 'TSC', 85, 80);

  }

  toggleFavorite(event) {
    console.log('We are toggling the favorite state for stock', event);
    this.stock.favorite = !this.stock.favorite;
  }

  trackStockByCode(index, stock) {
    return stock.code;
  }
}