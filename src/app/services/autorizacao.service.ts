import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  private url = environment.WebApiAutorizacao;
  private openId = environment.AutorizacaoOpenId;
  constructor(private httpClient: HttpClient) { }
  autenticacaoUsuario(email: string, senha: string): Observable<any>
  {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      OpenId: this.openId
    });
    const body = { email:email, senha: senha};
    return this.httpClient.post<any>(`${this.url}/Autorizacao/AutenticacaoUsuario`, body, {headers:httpHeaders});
  }
}
