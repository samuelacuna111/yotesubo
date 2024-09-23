import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-autp',
  templateUrl: './crear-autp.page.html',
  styleUrls: ['./crear-autp.page.scss'],
})
export class CrearAutpPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  incrementSeats() {
    const input = document.getElementById('asientosDisponibles') as HTMLInputElement;
    let currentValue = parseInt(input.value, 10);
    if (currentValue < 4) { // Cambia 10 por el máximo que desees
      input.value = (currentValue + 1).toString();
    }
  }
  
  decrementSeats() {
    const input = document.getElementById('asientosDisponibles') as HTMLInputElement;
    let currentValue = parseInt(input.value, 10);
    if (currentValue > 1) { // Cambia 1 por el mínimo que desees
      input.value = (currentValue - 1).toString();
    }
  }
}
