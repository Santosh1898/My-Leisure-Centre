import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreWestburyPage } from './centre-westbury.page';

const routes: Routes = [
  {
    path: '',
    component: CentreWestburyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreWestburyPageRoutingModule {}
