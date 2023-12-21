import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreLimeKilnPage } from './centre-lime-kiln.page';

const routes: Routes = [
  {
    path: '',
    component: CentreLimeKilnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreLimeKilnPageRoutingModule {}
