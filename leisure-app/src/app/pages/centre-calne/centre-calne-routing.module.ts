import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreCalnePage } from './centre-calne.page';

const routes: Routes = [
  {
    path: '',
    component: CentreCalnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreCalnePageRoutingModule {}
