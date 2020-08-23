import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintComponent } from './print/print.component';
import { BillComponent } from './bill/bill.component';
import { ItemsComponent } from './items/items.component';
import { HistoryComponent } from './history/history.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'print', component: PrintComponent },
  { path: 'form', component: BillComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'stock', component: StockComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
