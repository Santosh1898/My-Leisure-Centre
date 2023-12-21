import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreDurringtonPage } from './centre-durrington.page';

const routes: Routes = [
  {
    path: '',
    component: CentreDurringtonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreDurringtonPageRoutingModule {}
