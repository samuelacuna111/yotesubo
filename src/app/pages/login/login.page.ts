import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
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
