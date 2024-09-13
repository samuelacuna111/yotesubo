import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaViajesPageRoutingModule } from './vista-viajes-routing.module';

import { VistaViajesPage } from './vista-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaViajesPageRoutingModule
  ],
  declarations: [VistaViajesPage]
})
export class VistaViajesPageModule {}
