import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaDetalleViajePage } from './vista-detalle-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: VistaDetalleViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaDetalleViajePageRoutingModule {}
