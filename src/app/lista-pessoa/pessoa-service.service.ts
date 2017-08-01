import { Injectable } from '@angular/core';

@Injectable()
export class PessoaServiceService {

  nomesPessoas: string[] = ['João','Maria','ANgular2', 'Tiago'];
  constructor() { 

  }


  getPessoas():string[]{
    return this.nomesPessoas;
  }

  setPessoa(nome:string){
    this.nomesPessoas.push(nome);

  }


}
