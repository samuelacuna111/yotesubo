import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoCodigoPage } from './ingreso-codigo.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoCodigoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoCodigoPageRoutingModule {}
