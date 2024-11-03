import { Observable, delay, finalize } from 'rxjs';
import { Handler } from './../../../node_modules/@types/express-serve-static-core/index.d';
import { OcupadoService } from './../services/ocupado.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class loadingInterceptor implements HttpInterceptor {
  constructor(private ocupadoService : OcupadoService){}
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.ocupadoService.ocupado();
    return next.handle(req).pipe(
      delay(500),
      finalize(() => {
        this.ocupadoService.desocupado();
      })
    );
  }
};
