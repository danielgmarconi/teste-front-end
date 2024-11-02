import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { autorizadoGuard } from './guard/autorizado.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[autorizadoGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '***',
    redirectTo:'home'
  }
];
