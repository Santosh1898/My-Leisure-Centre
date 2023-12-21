import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreSpringfieldPage } from './centre-springfield.page';

const routes: Routes = [
  {
    path: '',
    component: CentreSpringfieldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreSpringfieldPageRoutingModule {}
