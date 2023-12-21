import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreTrowbridgePage } from './centre-trowbridge.page';

const routes: Routes = [
  {
    path: '',
    component: CentreTrowbridgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreTrowbridgePageRoutingModule {}
