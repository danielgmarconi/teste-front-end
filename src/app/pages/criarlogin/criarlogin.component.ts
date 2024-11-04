import { Component } from '@angular/core';
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
  entity = <Usuario>{};
  constructor(private router:Router,
              private toastr: ToastrService,
              private usuarioService:UsuarioService){

  }
  criar()
  {
    this.usuarioService.criarUsuario(this.entity).subscribe(
      (response) => {
        this.toastr.success("Autenticado com sucesso.","Atenção");
      },(error) =>{
        console.log(error);
        if(error.status == 401)
          this.toastr.warning("Acesso não autorizado.","Atenção");
        else if(error.status == 500)
          this.toastr.error("Erro interno contate o administrador.","Atenção");
        else
          this.toastr.error("Erro interno contate o administrador.","Atenção");
      });
  }
  cancelar()
  {
    this.router.navigate(['login']);
  }
}
