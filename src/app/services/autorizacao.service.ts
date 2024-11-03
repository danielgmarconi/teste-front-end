import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { AutorizacaoUsuario } from '../model/autorizacaoUsuario';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  private url = environment.WebApiAutorizacao;
  private openId = environment.AutorizacaoOpenId;
  constructor(private httpClient: HttpClient) { }
  autenticacaoUsuario(entity: AutorizacaoUsuario): Observable<any>
  {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      OpenId: this.openId
    });
    const body = Object.assign({}, entity);
    return this.httpClient.post<any>(`${this.url}/Autorizacao/AutenticacaoUsuario`, body, {headers:httpHeaders});
  }
}
