import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inputoutput',
  templateUrl: './inputoutput.component.html',
  styleUrls: ['./inputoutput.component.css']
})
export class InputoutputComponent implements OnInit {
  @Input() menu: string;
  @Output() nomeClidado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarNome(value) {
    this.nomeClidado.emit(value);
  }

}
