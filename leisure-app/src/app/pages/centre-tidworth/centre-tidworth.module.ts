import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreTidworthPageRoutingModule } from './centre-tidworth-routing.module';

import { CentreTidworthPage } from './centre-tidworth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreTidworthPageRoutingModule
  ],
  declarations: [CentreTidworthPage]
})
export class CentreTidworthPageModule {}
