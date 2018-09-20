import { ContatoDetalhePage } from './../contato-detalhe/contato-detalhe';
import { ContatosProvider } from './../../providers/contatos/contatos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html',
})
export class ContatosPage {
  contatos: Array<{nome: string, alias: string, poderes: string, alinhamento: string, genero: string}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contatosProvider: ContatosProvider) {
    this.contatos = contatosProvider.getContatos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatosPage');
  }

  addContato() {
    this.navCtrl.push(ContatoDetalhePage);
  }

  editContato(){
    this.navCtrl.push(ContatoDetalhePage, {cttParam: this.contatos});
  }
}