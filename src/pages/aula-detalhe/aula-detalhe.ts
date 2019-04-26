import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-aula-detalhe',
  templateUrl: 'aula-detalhe.html',
})
export class AulaDetalhePage {
  aula: any;
  ref: FirebaseObjectObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.aula = this.navParams.get('aula') || {};
    this.ref = this.db.object('/professores/'+this.aula.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaDetalhePage');
  }

  editarAula(){
    this.navCtrl.push('AulaEditarPage', {aula: this.aula});
  }
}
