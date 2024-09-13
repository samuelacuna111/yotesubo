import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaDetalleViajePageRoutingModule } from './vista-detalle-viaje-routing.module';

import { VistaDetalleViajePage } from './vista-detalle-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaDetalleViajePageRoutingModule
  ],
  declarations: [VistaDetalleViajePage]
})
export class VistaDetalleViajePageModule {}
