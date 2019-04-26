import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-classe-detalhe',
  templateUrl: 'classe-detalhe.html',
})
export class ClasseDetalhePage {
  classe: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.classe = this.navParams.get('classe') || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClasseDetalhePage');
  }

  editarClasse(){
    this.navCtrl.push('ClasseEditarPage', {classe: this.classe});
  }
}
