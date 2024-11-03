import { Component, OnInit } from '@angular/core';
import { AutorizacaoLoginService } from '../../services/autorizacaologin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  emailUsuario: string = "";
  statusLogin: boolean = false;
  constructor(private router:Router, private autorizacaoLoginService:AutorizacaoLoginService){ }
  ngOnInit() {
    setTimeout(() => {
      this.statusLogin = this.autorizacaoLoginService.statusLogin();
      if(this.statusLogin)
        this.emailUsuario = "Bem vindo " + localStorage.getItem("email");
    }, 500);
  }
  sair()
  {
    this.autorizacaoLoginService.deslogarLogin();
    this.router.navigate(['login']);
    this.ngOnInit()
  }
  cadastroUsuario()
  {

  }
}
