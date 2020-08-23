import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { PrintComponent } from './print/print.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HistoryComponent } from './history/history.component';
import { StockComponent } from './stock/stock.component';
@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    PrintComponent,
    ItemsComponent,
    HistoryComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
