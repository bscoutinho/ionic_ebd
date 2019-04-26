import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-evento-editar',
  templateUrl: 'evento-editar.html',
})
export class EventoEditarPage {
  evento: any;
  ref: FirebaseObjectObservable<any>;
  dtaObj: any;
  dtaEvento: any;
  dtaEv: any;
  anoEv: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController
  ) {
    /* pega o registro extato pela chave e passa para uma variável */
    this.evento = this.navParams.get('evento') || {};
    console.log(this.evento);
    this.ref = this.db.object('/eventos/'+this.evento.$key);

    /* passa a data no formato do banco para o formato do DatePicker */
    this.dtaEvento =  this.evento["data"].substring(6,10) + "-" + this.evento["data"].substring(3,5) + "-" + this.evento["data"].substring(0,2);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoEditarPage');
  }

  atualizarEvento(){

    /* salva dados para a criação de notificações de calendário */
    this.dtaEv = this.dtaEvento.substring(5,7) + "/" + this.dtaEvento.substring(8,10) + "/" + this.dtaEvento.substring(0,4) + " 12:00:00";
    this.evento["startDate"] = this.dtaEv;
    this.evento["endDate"] = this.dtaEv;

    /* passa a data no formato do DatePicker para o formato do banco */
    this.dtaObj = this.dtaEvento.substring(8,10) + "/" + this.dtaEvento.substring(5,7) + "/" + this.dtaEvento.substring(0,4);
    this.evento["data"] = this.dtaObj;
    this.evento["mesano"] = this.dtaEvento.substring(5,7) + "/" + this.dtaEvento.substring(0,4);

    this.ref.update(this.evento).then(() => {
      this.navCtrl.setRoot('EventosPage');
    });
  }

  removerEvento(){
    this.ref.remove().then(() => {
      this.navCtrl.setRoot('EventosPage');
    });
  }

  showToast(position: string, mensagem: string) {
    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 1000,
      position: position
    });

    toast.present(toast);
  }

}
