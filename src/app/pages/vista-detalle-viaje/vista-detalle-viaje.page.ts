import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-vista-detalle-viaje',
  templateUrl: './vista-detalle-viaje.page.html',
  styleUrls: ['./vista-detalle-viaje.page.scss'],
})
export class VistaDetalleViajePage implements OnInit {


  constructor(private iab: InAppBrowser) { }

  ngOnInit() {
  }
  openWhatsApp() {
    const phoneNumber = '5696333333'; 
    const url = `https://wa.me/${phoneNumber}`;
  
    const browser = this.iab.create(url, '_system');
  
  
  }
  openCallApp() {
    const phoneNumber = '123456789'; // Reemplaza con el número de teléfono
    window.open(`tel:${phoneNumber}`, '_system');
  }

}
