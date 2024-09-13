import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoCodigoPageRoutingModule } from './ingreso-codigo-routing.module';

import { IngresoCodigoPage } from './ingreso-codigo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoCodigoPageRoutingModule
  ],
  declarations: [IngresoCodigoPage]
})
export class IngresoCodigoPageModule {}
