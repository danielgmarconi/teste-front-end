import { Component } from '@angular/core';
import { CriarloginComponent } from '../criarlogin/criarlogin.component';
import { AutorizacaoLoginService } from '../../services/autorizacaologin.service';
import { Router } from '@angular/router';
import { AutorizacaoService } from '../../services/autorizacao.service';
import { ToastrService } from 'ngx-toastr';
import { AutorizacaoResponse } from '../../model/autorizacaoResponse';
import { FormGroup, FormsModule } from '@angular/forms';
import { AutorizacaoUsuario } from '../../model/autorizacaoUsuario';
declare var $:any;


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  entity = <AutorizacaoUsuario>{};
  constructor(private router:Router,
              private toastr: ToastrService,
              private autorizacaoLoginService:AutorizacaoLoginService,
              private autorizacaoService:AutorizacaoService){

  }
  entrar()
  {
    this.autorizacaoService.autenticacaoUsuario(this.entity).subscribe(
      (response) => {
        this.toastr.success("Autenticado com sucesso.","Atenção");
        let resultado: AutorizacaoResponse = <AutorizacaoResponse>response.resposta;
        localStorage.setItem("email", resultado.email);
        localStorage.setItem("tokenUsuario", resultado.tokenUsuario);
        localStorage.setItem("tokenRenovacao", resultado.tokenRenovacao);
        this.autorizacaoLoginService.autorizarLogin();
        this.router.navigate(['home']);
        $("#divEmail").html('<b>Bem vindo ' + resultado.email + '</b>');
        $("#divEmail").show();
        $("#divBotoes").show();
      },(error) =>{
        if(error.status == 401)
          this.toastr.warning("Acesso não autorizado.","Atenção");
        else
          this.toastr.error("Erro interno contate o administrador.","Atenção");
      });
  }
  criarNovoLogin()
  {
    this.router.navigate(['criarlogin']);
  }
}
