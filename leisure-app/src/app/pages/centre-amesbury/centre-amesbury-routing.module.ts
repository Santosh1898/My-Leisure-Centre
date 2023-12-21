import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreAmesburyPage } from './centre-amesbury.page';

const routes: Routes = [
  {
    path: '',
    component: CentreAmesburyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreAmesburyPageRoutingModule {}
