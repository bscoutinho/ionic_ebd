import {Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-professor-criar',
  templateUrl: 'professor-criar.html',
})

export class ProfessorCriarPage {
  professor: any;
  ref: FirebaseListObservable<any>;
  dtaProfessor: any;
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

    this.professor = {};
    this.ref = this.db.list('/professores');




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorCriarPage');
  }


  salvarProfessor(){

    /* Se o aniversario já passou incluir só no ano seguinte */
    var ano = new Date().getFullYear();
    var dtaHoje = new Date();
    var dtaLanc = new Date(this.dtaProfessor.substring(5,7) + "/" + this.dtaProfessor.substring(8,10) + "/" +  ano);
    if (dtaHoje > dtaLanc ){
      this.anoEv = new Date().getFullYear() + 1;
    }

    this.anoEv = new Date().getFullYear();

    /* salva dados para a criação de notificações de calendário */
    this.dtaEv = this.dtaProfessor.substring(5,7) + "/" + this.dtaProfessor.substring(8,10) + "/" + this.anoEv + " 12:00:00"
    this.professor["startDate"] = this.dtaEv;
    this.professor["endDate"] = this.dtaEv;

    /* passa a data no formato do DatePicker para o formato do banco */
    this.dtaObj = this.dtaProfessor.substring(8,10) + "/" + this.dtaProfessor.substring(5,7) + "/" + this.dtaProfessor.substring(0,4);
    this.professor["data"] = this.dtaObj;

    this.ref.push(this.professor).then(() => {
      this.navCtrl.setRoot('ProfessoresPage');
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
