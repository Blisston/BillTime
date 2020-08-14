import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintComponent } from './print/print.component';
import { BillComponent } from './bill/bill.component';

const routes: Routes = [
  { path: 'print', component: PrintComponent },
  { path: 'form', component: BillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
