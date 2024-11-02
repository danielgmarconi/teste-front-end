import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

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
