import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  item = '';
  price = 0;
  items = [];
  constructor() {
    if (localStorage.getItem('items') === null) {
      localStorage.setItem('items', JSON.stringify({ items: [] }));
    } else {
      this.items = JSON.parse(localStorage.getItem('items')).items;
    }
  }

  ngOnInit(): void {}
  addItem() {
    console.log(this.item);
    this.items.push({ name: this.item, price: this.price });
    localStorage.setItem('items', JSON.stringify({ items: this.items }));
    this.item = '';
  }
}
