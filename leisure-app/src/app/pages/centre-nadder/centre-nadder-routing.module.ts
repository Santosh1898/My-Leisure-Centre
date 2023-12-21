import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreNadderPage } from './centre-nadder.page';

const routes: Routes = [
  {
    path: '',
    component: CentreNadderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreNadderPageRoutingModule {}
