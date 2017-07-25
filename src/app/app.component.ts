import {Component} from '@angular/core';
import {AlertaService} from './alerta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //foto = 'favicon.ico';
  //title: string = 'Livro Angular 2';
  desenvolvimento: string[] = ['Angular', 'JavaScript', 'TypeScript', 'Html', 'CSS'];
  valor: string;

  constructor(private service: AlertaService) {

  }

  msgAlerta(): void {
    //alert("Livro Angular 2");
    this.service.msgAlerta();
  }

  valorPassado(valorPassado) {
    this.valor = valorPassado;
  }

}
