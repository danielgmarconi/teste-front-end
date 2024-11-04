import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarlogin',
  standalone: true,
  imports: [],
  templateUrl: './criarlogin.component.html'
})
export class CriarloginComponent {
  constructor(private router:Router){}
  criar()
  {

  }
  cancelar()
  {
    this.router.navigate(['login']);
  }
}
