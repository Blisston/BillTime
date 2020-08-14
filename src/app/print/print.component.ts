import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit, AfterViewInit {
  bills;
  billsObj;
  currentBill;
  id = 1;
  constructor(private router: Router, private activeRouter: ActivatedRoute) {
    this.bills = localStorage.getItem('billTime');
  }

  ngOnInit(): void {
    this.activeRouter.queryParamMap.subscribe(res => {
      this.id = +res.get('id');
      this.billsObj = JSON.parse(this.bills).bills;
      this.currentBill = this.billsObj.filter(x => x.id === this.id);
      this.currentBill = this.currentBill[0];
      console.log(this.currentBill);
    });
  }
  ngAfterViewInit() {
    window.print();
    this.router.navigate(['/form']);
  }
  calculateTotal(x, y) {
    return x * y;
  }
}
