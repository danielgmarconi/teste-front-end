import { Component, OnInit } from '@angular/core';
import { AutorizacaoLoginService } from '../../services/autorizacaologin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
declare var $:any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  emailUsuario: string = "";
  statusLogin: boolean = false;
  constructor(private router:Router,
              private toastr: ToastrService,
              private autorizacaoLoginService:AutorizacaoLoginService){}
  ngOnInit() {
    setTimeout(() => {
      this.statusLogin = this.autorizacaoLoginService.statusLogin();
      if(this.statusLogin)
      {
        this.emailUsuario = "Bem vindo " + localStorage.getItem("email");
        $("#divEmail").show();
        $("#divBotoes").show();
      }
      else
      {
        $("#divEmail").hide();
        $("#divBotoes").hide();
      }

    }, 500);
  }
  sair()
  {
    this.autorizacaoLoginService.deslogarLogin();
    this.router.navigate(['login']);
    this.ngOnInit()
    this.toastr.success("Deslogado com sucesso.","Atenção");
  }
  cadastroUsuario()
  {
    this.router.navigate(['usuariolista']);
  }
}
