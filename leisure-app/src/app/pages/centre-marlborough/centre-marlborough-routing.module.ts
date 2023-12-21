import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreMarlboroughPage } from './centre-marlborough.page';

const routes: Routes = [
  {
    path: '',
    component: CentreMarlboroughPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreMarlboroughPageRoutingModule {}
