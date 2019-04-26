import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  eventos: FirebaseListObservable<any[]>;
  pronto: boolean;
  dtaEvento: any;
  dtaObj: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.pronto = false;
    this.eventos = db.list('/eventos');
    this.eventos.subscribe(() => {
      this.pronto = true;
    });
  }

  pickDtaFinal(){

    this.dtaObj = this.dtaEvento.substring(5,7) + "/" + this.dtaEvento.substring(0,4);
    console.log(this.dtaObj);
    this.eventos = this.db.list('/eventos', {
      query: {
        orderByChild: 'mesano',
        equalTo: this.dtaObj,
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }

  adicionarEvento(){
    this.navCtrl.push('EventoCriarPage');
  }

  detalhe(evento){
    this.navCtrl.push('EventoDetalhePage', {evento: evento});
  }

  removeSelection(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

}
