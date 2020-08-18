import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  bills;
  constructor() {}

  ngOnInit(): void {
    this.bills = JSON.parse(localStorage.getItem('billTime')).bills;
    console.log(this.bills);
  }
}
