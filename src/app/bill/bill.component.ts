import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills;
  itemObj = `{
    "items":[
      {
        "name":"almond",
        "price":"80"
      },
      {
        "name":"Pista",
        "price":"90"
      }
    ]
  }`;
  items;
  bill = {
    id: 0,
    date: new Date(),
    customer_data: {
      name: '',
      number: ''
    },
    purchase: {
      items: [],
      discount: '',
      total: ''
    }
  };
  unitPrice = 0;
  totalPrice = 0;
  grandTotal = 0;
  @ViewChild('inputForm') myForm;
  constructor(private router: Router) {
    if (localStorage.getItem('billTime') == null) {
      this.bills = `{"bills":[]}`;
    } else {
      this.bills = localStorage.getItem('billTime');
    }
  }

  ngOnInit(): void {
    this.items = JSON.parse(this.itemObj).items;
    this.bill.id = this.getId();
  }

  getId(): number {
    const bills = JSON.parse(this.bills).bills;
    console.log(bills);
    return bills.length > 0 ? +bills[bills.length - 1].id + 1 : 1;
  }
  save(): void {
    const bills = JSON.parse(this.bills);
    console.log(bills);
    bills.bills.push(this.bill);
    console.log(this.bills);
    localStorage.setItem('billTime', JSON.stringify(bills));
    this.clear();
  }
  getPrice(form) {
    console.log(
      this.items.filter(x => x.name === form.value.itemName)[0].price
    );
    this.unitPrice = this.items.filter(
      x => x.name === form.value.itemName
    )[0].price;
    this.myForm.statusChanges.subscribe(result =>
      this.calculateSub(this.myForm)
    );
  }
  calculateSub(form) {
    this.totalPrice = +this.unitPrice * +form.value.quantity;
  }
  getTotal(x, y) {
    return x * y;
  }
  addItem(item) {
    this.bill.purchase.items.push({
      name: item.value.itemName,
      unit_cost: '' + this.unitPrice,
      units: '' + item.value.quantity
    });
    this.myForm.reset();
    this.unitPrice = 0;
    this.totalPrice = 0;
    this.calculateGrand();
  }

  calculateGrand() {
    this.grandTotal = 0;
    this.bill.purchase.items.forEach(x => {
      this.grandTotal += this.getTotal(+x.units, +x.unit_cost);
    });
  }
  clear() {
    this.bill = {
      id: 0,
      date: new Date(),
      customer_data: {
        name: '',
        number: ''
      },
      purchase: {
        items: [],
        discount: '',
        total: ''
      }
    };
    this.bills = localStorage.getItem('billTime');
    this.bill.id = this.getId();
  }
  print() {
    const pId = this.bill.id;
    this.save();
    this.router.navigate(['/print'], { queryParams: { id: pId } });
  }
}
