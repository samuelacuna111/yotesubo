import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-restablecerpass',
  templateUrl: './restablecerpass.page.html',
  styleUrls: ['./restablecerpass.page.scss'],
})
export class RestablecerpassPage {
  email: string = '';

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  async onSendCode() {
    if (this.email) {
      // Crea la alerta
      const alert = await this.alertController.create({
        header: 'Código Enviado',
        message: `Se ha enviado un código a ${this.email}`,
        buttons: [{
          text: 'OK',
          handler: () => {
            // Redirige a la página de ingreso de código
            this.navCtrl.navigateForward('/ingreso-codigo');
          }
        }]
      });
      await alert.present();
    } else {
      // Muestra alerta si el correo está vacío
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingrese un correo válido.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}
