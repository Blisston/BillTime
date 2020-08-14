import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  bills = `{
    "bills":[{
      "id":1,
      "date":"12/09/2020",
      "customer_data":{
        "name":"Blisston Kirubha S",
        "number":"8667084511"
      },
      "purchase":{
        "items":[
          {
            "name":"Cashew Nut",
            "unit_cost":"100",
            "units":"8"
          }],
          "discount":"20",
          "total":"10000"
      }
    }]
  }`;
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
  constructor() {}

  ngOnInit(): void {
    this.items = JSON.parse(this.itemObj).items;
    this.bill.id = this.getId();
  }

  getId(): number {
    const bills = JSON.parse(this.bills).bills;
    return bills[bills.length - 1].id + 1;
  }
  save(): void {
    const bills = JSON.parse(this.bills).bills;
    bills.push(this.bill);
    console.log(bills);
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
}
