import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Place } from "../../models/place";
import { PlacesService } from "../../services/places";
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-place',
  templateUrl: 'place.html'
})
export class PlacePage {
  place: Place;
  index: number;

  constructor(public navParams: NavParams,
              private alertCtrl: AlertController,
              private viewCtrl: ViewController,
              private placesService: PlacesService) {
    this.place = this.navParams.get('place');
    this.index = this.navParams.get('index');
  }

    presentConfirm() {
        let alert = this.alertCtrl.create({
            title: 'Delete this Item',
            message: 'Do you want to delete this memory?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.onDelete();
                        console.log('Item Deleted');
                    }
                }
            ]
        });
        alert.present();
    }


  onLeave() {
    this.viewCtrl.dismiss();
  }

  onDelete() {
    this.placesService.deletePlace(this.index);
    this.onLeave();
  }

}
