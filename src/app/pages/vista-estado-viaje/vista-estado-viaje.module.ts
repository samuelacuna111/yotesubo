import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaEstadoViajePageRoutingModule } from './vista-estado-viaje-routing.module';

import { VistaEstadoViajePage } from './vista-estado-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaEstadoViajePageRoutingModule
  ],
  declarations: [VistaEstadoViajePage]
})
export class VistaEstadoViajePageModule {}
