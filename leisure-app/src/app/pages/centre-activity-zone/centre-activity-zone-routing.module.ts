import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreActivityZonePage } from './centre-activity-zone.page';

const routes: Routes = [
  {
    path: '',
    component: CentreActivityZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreActivityZonePageRoutingModule {}
