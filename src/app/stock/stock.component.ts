import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  stocks;
  edit = false;
  constructor() {
    if (localStorage.getItem('stock') === null) {
      localStorage.setItem('stock', JSON.stringify({ stocks: [] }));
      this.stocks = [];
    } else {
      this.stocks = JSON.parse(localStorage.getItem('stock')).stocks;
    }
    this.checkAndAdd();
  }
  checkAndAdd() {
    let items = JSON.parse(localStorage.getItem('items')).items;
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      if (this.stocks.map(x => x.name).indexOf(items[i].name) == -1) {
        this.stocks.push({ name: items[i].name, stock: 0 });
      }
    }
    for (let i = 0; i < this.stocks.length; i++) {
      if (items.map(x => x.name).indexOf(this.stocks[i].name) == -1) {
        this.stocks.splice(i, 1);
        i--;
      }
    }
    localStorage.setItem('stock', JSON.stringify({ stocks: this.stocks }));
  }

  ngOnInit(): void {}
  editN() {
    this.edit = true;
  }
  save() {
    this.edit = false;
    localStorage.setItem('stock', JSON.stringify({ stocks: this.stocks }));
  }
}
