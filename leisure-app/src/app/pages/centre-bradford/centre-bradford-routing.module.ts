import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreBradfordPage } from './centre-bradford.page';

const routes: Routes = [
  {
    path: '',
    component: CentreBradfordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreBradfordPageRoutingModule {}
