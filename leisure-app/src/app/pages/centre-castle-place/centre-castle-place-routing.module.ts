import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreCastlePlacePage } from './centre-castle-place.page';

const routes: Routes = [
  {
    path: '',
    component: CentreCastlePlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreCastlePlacePageRoutingModule {}
