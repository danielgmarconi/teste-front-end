import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutorizacaoLoginService } from '../services/autorizacaologin.service';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const autorizacaoLoginService = inject(AutorizacaoLoginService);
  const router = inject(Router);
  if(autorizacaoLoginService.statusLogin())
    return true;
  else
    router.navigate(['login']);
  return false;
};
