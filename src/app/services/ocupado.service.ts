import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class OcupadoService {

  requestCount:number = 0;
  constructor(private spinner:NgxSpinnerService) { }
  ocupado(){
    this.requestCount++;
    this.spinner.show()
  }
  desocupado(){
    this.requestCount--;
    if(this.requestCount <= 0){
      this.requestCount = 0;
      this.spinner.hide();
    }
  }
}
