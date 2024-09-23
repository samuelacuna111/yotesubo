import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistaEstadoViajePage } from './vista-estado-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: VistaEstadoViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistaEstadoViajePageRoutingModule {}
