import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  refDelEvent: FirebaseListObservable<any>;
  refDelProf: FirebaseListObservable<any>;
  startDate: any;
  endDate: any;
  title: any;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public calendar: Calendar,
              public db: AngularFireDatabase,
              public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: 'SobrePage' },
      //{ title: 'Início', component: HomePage },
      //{ title: 'List', component: ListPage },
      { title: 'Aulas', component: 'AulasPage' },
      { title: 'Profesores', component: 'ProfessoresPage' },
      { title: 'Eventos', component: 'EventosPage' },
      { title: 'Classes', component: 'ClassesPage' },
      { title: 'Relatórios', component: 'RelatoriosPage' }

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      /*solicita permissão de acesso ao calendário do celular*/
      this.calendar.hasReadWritePermission().then((result)=>{
        if(result === false){
          this.calendar.requestReadWritePermission().then((v)=>{
          },(r)=>{
            console.log("Rejected");
          })
        }
      });

      /*remove no calendário os eventos cadastrados*/
      this.refDelEvent = this.db.list('/eventos', { preserveSnapshot: true });
      this.refDelEvent.subscribe(snapshots => {
        snapshots.forEach(snapshot => {

          this.startDate = snapshot.child("startDate").val();
          this.endDate = snapshot.child("endDate").val();
          this.title = snapshot.child("titulo").val();

          var startDate = new Date(this.startDate);
          var endDate = new Date(this.endDate);
          var title = this.title;


          this.calendar.deleteEvent(title, null, null, startDate, endDate);

        });
      });

      /*remove no calendário os professores cadastrados*/
      this.refDelProf = this.db.list('/professores', { preserveSnapshot: true });
      this.refDelProf.subscribe(snapshots => {
        snapshots.forEach(snapshot => {

          this.startDate = snapshot.child("startDate").val();
          this.endDate = snapshot.child("endDate").val();
          this.title = snapshot.child("nome").val();

          var startDate = new Date(this.startDate);
          var endDate = new Date(this.endDate);
          var title = this.title;

          this.calendar.deleteEvent(title, null, null, startDate, endDate);

        });
      });

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}
