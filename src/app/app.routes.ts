import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { autorizadoGuard } from './guard/autorizado.guard';
import { CriarloginComponent } from './pages/criarlogin/criarlogin.component';
import { UsuarioListaComponent } from './pages/usuario-lista/usuario-lista.component';

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
    path: 'usuariolista',
    component: UsuarioListaComponent,
    canActivate:[autorizadoGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'criarlogin',
    component: CriarloginComponent
  },
  {
    path: '***',
    redirectTo:'home'
  }
];
