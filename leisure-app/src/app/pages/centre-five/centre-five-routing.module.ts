import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreFivePage } from './centre-five.page';

const routes: Routes = [
  {
    path: '',
    component: CentreFivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreFivePageRoutingModule {}
