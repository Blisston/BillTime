import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
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
  billsObj;
  currentBill;
  id = 1;
  constructor() { }

  ngOnInit(): void {
    this.billsObj = JSON.parse(this.bills).bills;
    this.currentBill = this.billsObj.filter(x => x.id === this.id );
    this.currentBill = this.currentBill[0]
    console.log(this.currentBill);
    //window.print();
  }
  calculateTotal(x,y) {
    return x*y;
  }
}
