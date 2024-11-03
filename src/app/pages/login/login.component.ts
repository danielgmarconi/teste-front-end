import { Component } from '@angular/core';
import { CriarloginComponent } from '../criarlogin/criarlogin.component';
import { AutorizacaoLoginService } from '../../services/autorizacaologin.service';
import { Router } from '@angular/router';
import { AutorizacaoService } from '../../services/autorizacao.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CriarloginComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  modalCriarLogin:boolean = false

  constructor(private router:Router,
              private toastr: ToastrService,
              private autorizacaoLoginService:AutorizacaoLoginService,
              private autorizacaoService:AutorizacaoService){

  }
  entrar()
  {
    this.autorizacaoService.autenticacaoUsuario('damielgmarconi@gmail.com', '@Daniel1231').subscribe(
      (response) => {

      },(error) =>{
        if(error.status == 401)
          this.toastr.warning("Acesso não autorizado.","Atenção");
        else
          this.toastr.error("Erro interno contate o administrador.","Atenção");
      });
  }
  criarNovoLogin()
  {
    // this.autorizacaoLoginService.autorizarLogin();
    // this.router.navigate(['home']);
    //this.modalCriarLogin = true;

  }
}
