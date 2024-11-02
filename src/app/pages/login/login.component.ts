import { Component } from '@angular/core';
import { CriarloginComponent } from '../criarlogin/criarlogin.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CriarloginComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  modalCriarLogin:boolean = false

  criarNovoLogin()
  {
    this.modalCriarLogin = true;
  }
}
