import { Component } from '@angular/core';
import { CriarloginComponent } from '../criarlogin/criarlogin.component';
import { AutorizacaoLoginService } from '../../services/autorizacaologin.service';
import { Router } from '@angular/router';
import { AutorizacaoService } from '../../services/autorizacao.service';
import { ToastrService } from 'ngx-toastr';
import { AutorizacaoResponse } from '../../model/autorizacaoResponse';
import { FormsModule } from '@angular/forms';
import { AutorizacaoUsuario } from '../../model/autorizacaoUsuario';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CriarloginComponent, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  entity = <AutorizacaoUsuario>{};
  modalCriarLogin:boolean = false
  public aaa: string ="";

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
      },(error) =>{
        if(error.status == 401)
          this.toastr.warning("Acesso não autorizado.","Atenção");
        else
          this.toastr.error("Erro interno contate o administrador.","Atenção");
      });
  }
  criarNovoLogin()
  {
    this.modalCriarLogin = true;
  }
}
