import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentreValePageRoutingModule } from './centre-vale-routing.module';

import { CentreValePage } from './centre-vale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentreValePageRoutingModule
  ],
  declarations: [CentreValePage]
})
export class CentreValePageModule {}
