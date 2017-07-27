import { Component, OnInit } from '@angular/core';

import {Contatos} from  './contatos';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  contato = new Contatos('', '', '');

  constructor() { }

  ngOnInit() {
  }

}
