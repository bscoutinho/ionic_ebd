import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-classes',
  templateUrl: 'classes.html',
})
export class ClassesPage {
  classes: FirebaseListObservable<any[]>;
  pronto: boolean;
  dia: string;
  mes: string;
  ano: string;
  dtaFinal: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase
  ) {
    this.pronto = false;

    this.classes = db.list('/classes');
    this.classes.subscribe(() => {
      this.pronto = true;
    });


  }

  /*initializeItems() {
    this.items = [];
    this.db.list('/classes').subscribe(items => {
      items.forEach(
        item => {
         Object.keys(item).map(key=>item[key]).map(order => {
           this.items.push(order);
         })
        })
    })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;
    console.log(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }*/
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassesPage');
  }

  adicionarClasse(){
    this.navCtrl.push('ClasseCriarPage');
  }

  editar(classe){
    this.navCtrl.push('ClasseEditarPage', {classe: classe});

  }

}
