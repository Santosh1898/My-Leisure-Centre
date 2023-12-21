import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreWarminsterPage } from './centre-warminster.page';

const routes: Routes = [
  {
    path: '',
    component: CentreWarminsterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreWarminsterPageRoutingModule {}
