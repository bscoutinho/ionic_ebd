import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-professor-editar',
  templateUrl: 'professor-editar.html',
})
export class ProfessorEditarPage {
  professor: any;
  ref: FirebaseObjectObservable<any>;
  dtaObj: any;
  dtaProfessor: any;
  dtaEv: any;
  anoEv: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public toastCtrl: ToastController
  ) {
    /* pega o registro extato pela chave e passa para uma variável */
    this.professor = this.navParams.get('professor') || {};
    console.log(this.professor);
    this.ref = this.db.object('/professores/'+this.professor.$key);

    /* passa a data no formato do banco para o formato do DatePicker */
    this.dtaProfessor =  this.professor["data"].substring(6,10) + "-" + this.professor["data"].substring(3,5) + "-" + this.professor["data"].substring(0,2);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessorEditarPage');
  }

  atualizarProfessor(){

    /* Se o aniversario já passou incluir só no ano seguinte */
    var ano = new Date().getFullYear();
    var dtaHoje = new Date();
    var dtaLanc = new Date(this.dtaProfessor.substring(5,7) + "/" + this.dtaProfessor.substring(8,10) + "/" +  ano);
    if (dtaHoje > dtaLanc ){
      this.anoEv = new Date().getFullYear() + 1;
    }

    /* salva dados para a criação de notificações de calendário */
    this.anoEv = new Date().getFullYear();
    this.dtaEv = this.dtaProfessor.substring(5,7) + "/" + this.dtaProfessor.substring(8,10) + "/" + this.anoEv + " 12:00:00"
    this.professor["startDate"] = this.dtaEv;
    this.professor["endDate"] = this.dtaEv;

    /* passa a data no formato do DatePicker para o formato do banco */
    this.dtaObj = this.dtaProfessor.substring(8,10) + "/" + this.dtaProfessor.substring(5,7) + "/" + this.dtaProfessor.substring(0,4);
    this.professor["data"] = this.dtaObj;

    this.ref.update(this.professor).then(() => {
      this.navCtrl.setRoot('ProfessoresPage');
    });
  }

  removerProfessor(){
    this.ref.remove().then(() => {
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
