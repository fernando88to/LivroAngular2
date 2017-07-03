import { Component } from '@angular/core';
import {AlertaService} from './alerta.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Está Funcionando';
  foto: string='favicon.ico';


  constructor(private service:AlertaService){

  }

  msgAlerta(): void{
    //alert("Livro Angular 2");
    this.service.msgAlerta();
  }

}
