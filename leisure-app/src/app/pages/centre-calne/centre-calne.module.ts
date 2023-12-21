import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreCalnePageRoutingModule } from './centre-calne-routing.module';

import { CentreCalnePage } from './centre-calne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreCalnePageRoutingModule
  ],
  declarations: [CentreCalnePage]
})
export class CentreCalnePageModule {}
