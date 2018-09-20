import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ContatosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ContatosProvider {
  pessoas: Array<{nome: string, alias: string, poderes: string, alinhamento: string, genero: string}> = []

  constructor() {
    this.pessoas.push({
      nome: 'Scott Summers', alias: 'Ciclope', poderes: 'Dispara rajadas óticas', alinhamento: 'leal bom', genero: 'masculino'})
  }

  addContato (nome, alias, poderes, alinhamento, genero) {
    this.pessoas.push({nome, alias, poderes, alinhamento, genero})
  }

  getContatos(): Array<{nome: string, alias: string, poderes: string, alinhamento: string, genero: string}> {
   return this.pessoas;
}

}
