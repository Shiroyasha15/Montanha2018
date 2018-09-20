import { ContatosProvider } from './../../providers/contatos/contatos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ContatoDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contato-detalhe',
  templateUrl: 'contato-detalhe.html',
})
export class ContatoDetalhePage {
  contato = {nome: '', Alias: '', Poderes: '', Alinhamento: '', Genero: ''};
  cttparam: any=null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private contatosProvider: ContatosProvider ) {
    this.cttparam = navParams.get('cttParam');

    if (this.cttparam != null) {
      this.contato.nome = this.cttparam.Nome;
      this.contato.Alias = this.cttparam.Alias;
      this.contato.Poderes = this.cttparam.Poderes;
      this.contato.Alinhamento = this.cttparam.Alinhamento;
      this.contato.Genero = this.cttparam.Genero;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContatoDetalhePage');
  }

  confirmaContato(){
    const c= this.contato;

    if(this,this.cttparam != null) {

    } else {
      this.contatosProvider.addContato(c.nome, c.Alias, c.Poderes, c.Alinhamento, c.Genero)
    }
    this.navCtrl.pop();
  }

  cancelaContato(){
    this.navCtrl.pop();
  }

}
