import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: string;
  senha: string;
  usuarioObj: any;
  senhaObj: any;
  topics: FirebaseListObservable<any>;
  pushMessage: string = 'push message will be displayed here';
  refAddEvent: FirebaseListObservable<any>;
  refAddProf: FirebaseListObservable<any>;
  startDate: any;
  endDate: any;
  title: any;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db: AngularFireDatabase,
              public toastCtrl: ToastController,
              public calendar: Calendar,
              public platform: Platform
  ) {
    /* código para inserir no banco login e senha caso a table login seja deletada */
    /*this.usuarioCtrl = "iejrj";
     this.senhaCtrl = "ebd";
     this.login = {};
     this.login["usuario"] = this.usuarioCtrl;
     this.login["senha"] = this.senhaCtrl;
     this.ref = this.db.list('/login');
     this.ref.push(this.login)*/

    /*Pega o valor de um determinado campo de um objeto*/
    this.topics = db.list('/login', { preserveSnapshot: true });
    this.topics.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.usuarioObj = snapshot.child("usuario").val();
        this.senhaObj = snapshot.child("senha").val();
      });
    });

    if (navParams.data.message) {
      this.pushMessage = navParams.data.message;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  confereLogin(usuario, senha){
    this.usuario = usuario;
    this.senha = senha;
    if((usuario == this.usuarioObj) && (senha == this.senhaObj)) {
      this.navCtrl.push('SobrePage');
    } else {
      this.showToast();
      this.usuario = "";
      this.senha = "";
    }

    /*insere no calendário os eventos cadastrados*/
    this.refAddEvent = this.db.list('/eventos', { preserveSnapshot: true });
    this.refAddEvent.subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        this.startDate = snapshot.child("startDate").val();
        this.endDate = snapshot.child("endDate").val();
        this.title = snapshot.child("titulo").val();

        var startDate = new Date(this.startDate);
        var endDate = new Date(this.endDate);
        var title = this.title;
        var notes = "Evento criado pelo APP Controle EBD";

        this.calendar.createEventWithOptions(title, null, notes, startDate, endDate);

      });
    });

    /*insere no calendário os professores cadastrados*/
    this.refAddProf = this.db.list('/professores', { preserveSnapshot: true });
    this.refAddProf.subscribe(snapshots => {
      snapshots.forEach(snapshot => {

        this.startDate = snapshot.child("startDate").val();
        this.endDate = snapshot.child("endDate").val();
        this.title = snapshot.child("nome").val();

        var startDate = new Date(this.startDate);
        var endDate = new Date(this.endDate);
        var title = this.title;
        var notes = "Evento criado pelo APP Controle EBD";

        var calOptions = this.calendar.getCalendarOptions(); // grab the defaults
        calOptions.firstReminderMinutes = 60; // default is 60, pass in null for no reminder (alarm)
        calOptions.recurrence = "yearly";

        this.calendar.createEventWithOptions(title, null, notes, startDate, endDate, calOptions);


      });
    });
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: "Login e senha inválidos",
      duration: 2000,
      position: "top"
    });

    toast.present(toast);
  }

}
