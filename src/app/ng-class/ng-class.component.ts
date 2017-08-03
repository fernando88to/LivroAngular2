import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }


  classes(): any {
    let valores = {
      'cor-fundo': true,
      'cor-letra': true,
      'estilo-letra': true,
      'borda-paragrafo': true

    }

    return valores;


  }

}
