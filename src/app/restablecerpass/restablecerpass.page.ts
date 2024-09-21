import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-restablecerpass',
  templateUrl: './restablecerpass.page.html',
  styleUrls: ['./restablecerpass.page.scss'],
})
    export class RestablecerpassPage {
    email: string = '';
    password: string= '';
  
    constructor(private navCtrl: NavController) {}
  
    onLogin() {
      if (this.email === 'admin' && this.password === 'admin') {
        // Si el login es exitoso, redirigir a la página principal
        this.navCtrl.navigateRoot('/home');
      } else {
        alert('Credenciales incorrectas');
      }
    }
  }

  

