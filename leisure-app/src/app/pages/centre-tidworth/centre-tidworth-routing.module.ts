import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreTidworthPage } from './centre-tidworth.page';

const routes: Routes = [
  {
    path: '',
    component: CentreTidworthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreTidworthPageRoutingModule {}
