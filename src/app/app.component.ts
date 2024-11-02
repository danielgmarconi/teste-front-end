import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import  {  NgxSpinnerModule  }  from  "ngx-spinner" ;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
           HeaderComponent,
           FooterComponent,
           NgxSpinnerModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'teste-front-end';
}
