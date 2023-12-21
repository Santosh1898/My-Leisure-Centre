import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentreLeightonPage } from './centre-leighton.page';

const routes: Routes = [
  {
    path: '',
    component: CentreLeightonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentreLeightonPageRoutingModule {}
