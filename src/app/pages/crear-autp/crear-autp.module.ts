import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAutpPageRoutingModule } from './crear-autp-routing.module';

import { CrearAutpPage } from './crear-autp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAutpPageRoutingModule
  ],
  declarations: [CrearAutpPage]
})
export class CrearAutpPageModule {}
