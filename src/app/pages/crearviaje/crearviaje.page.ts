import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearviaje',
  templateUrl: './crearviaje.page.html',
  styleUrls: ['./crearviaje.page.scss'],
})
export class CrearviajePage implements OnInit {

  today: string;

  constructor() {
    const now = new Date();
    // Formato: YYYY-MM-DDTHH:mm
    this.today = now.toISOString();
  }
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
