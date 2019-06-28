import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  showSkip = true;
  constructor( public menu: MenuController,
               public router: Router,
               public storage: Storage) { }

  ngOnInit() {
  }

  startApp() {
    this.router
        .navigateByUrl('/app/tabs/schedule')
        .then(() => this.storage.set('ion_did_tutorial', true));
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.router.navigateByUrl('/app/tabs/schedule');
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
