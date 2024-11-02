import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AutorizacaoService } from '../services/autorizacao.service';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const autorizacaoService = inject(AutorizacaoService);
  const router = inject(Router);
  if(autorizacaoService.statusLogin())
    return true;
  else
    router.navigate(['login']);
  return false;
};
