import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

import { QuoteService} from '../../services/quote';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      
  }


  LogIn():void{
    this.navCtrl.push(PerfilPage);
  }

}
