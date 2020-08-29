import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

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
  export() {
    const flat = this.flatten(this.bills);
    console.log(flat);
    this.exportAsExcelFile(flat, 'Bills');
  }
  flatten(arr) {
    let result = [];
    arr.forEach(o => {
      o.purchase.items.forEach(items => {
        result.push({
          id: o.id,
          name: o.customer_data.name,
          contact: o.customer_data.number,
          date: new Date(o.dateField).toDateString(),
          item: items.name,
          units: items.units,
          cost: items.unit_cost,
          total: +items.units * items.unit_cost
        });
      });
    });
    return result;
  }

  static toExportFileName(excelFileName: string): string {
    return `${excelFileName}_export_${new Date().getTime()}.xlsx`;
  }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data']
    };
    XLSX.writeFile(workbook, HistoryComponent.toExportFileName(excelFileName));
  }
}
