
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-usuario-lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './usuario-lista.component.html'
})
export class UsuarioListaComponent implements OnInit  {
  email: string ='';
  public lista : Usuario[] =[];
  constructor(private toastr: ToastrService,
              private usuarioService:UsuarioService){}
  ngOnInit(): void {
    this.buscar();
  }
  buscar()
  {
    let busca = <Usuario>{}
    if(this.email.length != 0)
      busca.email = this.email;
    this.usuarioService.buscar(busca).subscribe(
      (response) => {
        this.lista = response.resposta;
        console.log(this.lista)
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
