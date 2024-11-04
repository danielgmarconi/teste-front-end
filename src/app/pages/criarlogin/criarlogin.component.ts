
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-criarlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criarlogin.component.html'
})
export class CriarloginComponent {
  entity = <Usuario>{ email:'', senha:'', repetirSenha:''};
  constructor(private router:Router,
              private toastr: ToastrService,
              private usuarioService:UsuarioService){

  }
  criar()
  {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let senhaRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if(this.entity.email.length == 0)
      this.toastr.warning("Preencher o Usuario.","Atenção");
    else if(emailRegex.test(this.entity.email) == false)
      this.toastr.warning("Email invalido.","Atenção");
    else if(this.entity.senha.length == 0 || this.entity.repetirSenha.length == 0)
      this.toastr.warning("Preencher o Senha e Repetir Senha.","Atenção");
    else if(this.entity.senha != this.entity.repetirSenha)
      this.toastr.warning("Senha e Repetir Senha estão diferente.","Atenção");
    else if(senhaRegex.test(this.entity.senha) == false)
      this.toastr.warning("Senha invalida, deve ter 8 digitos coaracteres maisculos e minusculos e caracteres especial.","Atenção");
    else
    {
      this.usuarioService.criarUsuario(this.entity).subscribe(
        (response) => {
          this.toastr.success("Usuario criado com sucesso.","Atenção");
          this.router.navigate(['login']);
        },(error) =>{
          if(error.status == 401)
            this.toastr.warning("Acesso não autorizado.","Atenção");
          else if(error.status == 500)
          {
             let msg = '';
            for(var a = 0; a < error.error.resposta.length; a++)
            {
              msg += msg.length == 0 ? '' : ', ';
              msg += error.error.resposta[a];
              this.toastr.error(msg,"Atenção");
            }
          }
          else
            this.toastr.error("Erro interno contate o administrador.","Atenção");
        });
    }
  }
  cancelar()
  {
    this.router.navigate(['login']);
  }

}
