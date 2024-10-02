import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistaDetalleViajePageRoutingModule } from './vista-detalle-viaje-routing.module';

import { VistaDetalleViajePage } from './vista-detalle-viaje.page';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistaDetalleViajePageRoutingModule,
  ],
  declarations: [VistaDetalleViajePage],
  providers: [
    InAppBrowser  // Asegúrate de registrar InAppBrowser aquí
  ]
})
export class VistaDetalleViajePageModule {}
