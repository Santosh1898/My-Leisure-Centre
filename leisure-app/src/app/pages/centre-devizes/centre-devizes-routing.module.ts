import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreDevizesPage } from './centre-devizes.page';

const routes: Routes = [
  {
    path: '',
    component: CentreDevizesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreDevizesPageRoutingModule {}
