import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  constructor() { }


  getPessoas():string[]{
    return ['João','Maria','ANgular2', 'Tiago'];
  }

}
