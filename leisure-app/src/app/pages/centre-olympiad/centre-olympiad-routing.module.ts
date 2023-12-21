import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreOlympiadPage } from './centre-olympiad.page';

const routes: Routes = [
  {
    path: '',
    component: CentreOlympiadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreOlympiadPageRoutingModule {}
