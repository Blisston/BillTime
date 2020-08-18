import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintComponent } from './print/print.component';
import { BillComponent } from './bill/bill.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'print', component: PrintComponent },
  { path: 'form', component: BillComponent },
  { path: 'items', component: ItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
