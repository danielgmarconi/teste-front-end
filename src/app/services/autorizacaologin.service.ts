import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoLoginService {

  constructor() { }
  statusLogin = () => !!localStorage.getItem("login");
  autorizarLogin()
  {
    localStorage.setItem("login", "S")
  }
  deslogarLogin()
  {
    localStorage.clear();
  }
}
