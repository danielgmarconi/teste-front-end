import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.webApi;
  private openId = environment.openId;
  constructor(private httpClient: HttpClient) { }

  criarUsuario(entity: Usuario): Observable<any>
  {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      OpenId: this.openId
    });
    const body = Object.assign({}, entity);
    return this.httpClient.post<any>(`${this.url}/Usuario/Criar`, body, {headers:httpHeaders});
  }
}
