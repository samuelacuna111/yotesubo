import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAutpPage } from './crear-autp.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAutpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAutpPageRoutingModule {}
