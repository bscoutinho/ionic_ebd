import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-evento-detalhe',
  templateUrl: 'evento-detalhe.html',
})
export class EventoDetalhePage {
  ref: FirebaseObjectObservable<any>;
  evento: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.evento = this.navParams.get('evento') || {};
    this.ref = this.db.object('/eventos/'+this.evento.$key);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoDetalhePage');
  }

  editarEvento(){
    this.navCtrl.push('EventoEditarPage', {evento: this.evento});
  }
}
