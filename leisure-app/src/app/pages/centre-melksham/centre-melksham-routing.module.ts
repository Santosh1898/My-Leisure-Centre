import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreMelkshamPage } from './centre-melksham.page';

const routes: Routes = [
  {
    path: '',
    component: CentreMelkshamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreMelkshamPageRoutingModule {}
