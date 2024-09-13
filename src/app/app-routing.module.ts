import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'restablecerpass',
    loadChildren: () => import('./restablecerpass/restablecerpass.module').then( m => m.RestablecerpassPageModule)
  },
  {
    path: 'ingreso-codigo',
    loadChildren: () => import('./ingreso-codigo/ingreso-codigo.module').then( m => m.IngresoCodigoPageModule)
  },
  {
    path: 'cambio-pass',
    loadChildren: () => import('./cambio-pass/cambio-pass.module').then( m => m.CambioPassPageModule)
  },
  {
    path: 'vista-viajes',
    loadChildren: () => import('./vista-viajes/vista-viajes.module').then( m => m.VistaViajesPageModule)
  },
  {
    path: 'vista-detalle-viaje',
    loadChildren: () => import('./vista-detalle-viaje/vista-detalle-viaje.module').then( m => m.VistaDetalleViajePageModule)
  },
  {
    path: 'vista-estado-viaje',
    loadChildren: () => import('./vista-estado-viaje/vista-estado-viaje.module').then( m => m.VistaEstadoViajePageModule)
  },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
