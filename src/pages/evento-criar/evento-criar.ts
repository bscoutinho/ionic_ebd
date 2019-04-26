import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-evento-criar',
  templateUrl: 'evento-criar.html',
})

export class EventoCriarPage {
  evento: any;
  ref: FirebaseListObservable<any>;
  dtaEvento: String = new Date().toISOString();
  dtaObj: any;
  dtaEv: any;
  anoEv: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public calendar: Calendar,
    public toastCtrl: ToastController
  ) {

    this.evento = {};
    this.ref = this.db.list('/eventos');




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventoCriarPage');
  }


  salvarEvento(){

    /* salva dados para a criação de notificações de calendário */
    this.dtaEv = this.dtaEvento.substring(5,7) + "/" + this.dtaEvento.substring(8,10) + "/" + this.dtaEvento.substring(0,4) + " 12:00:00";
    this.evento["startDate"] = this.dtaEv;
    this.evento["endDate"] = this.dtaEv;

    /* passa a data no formato do DatePicker para o formato do banco */
    this.dtaObj = this.dtaEvento.substring(8,10) + "/" + this.dtaEvento.substring(5,7) + "/" + this.dtaEvento.substring(0,4);
    this.evento["data"] = this.dtaObj;
    this.evento["mesano"] = this.dtaEvento.substring(5,7) + "/" + this.dtaEvento.substring(0,4);

    this.ref.push(this.evento).then(() => {
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
