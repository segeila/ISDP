import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TestDeviceList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-device-list',
  templateUrl: 'test-device-list.html'
})
export class TestDeviceListPage {

  devices = ['SonyXperia', 'RaspberryPi', 'SomeonesDevice', 'MetropoliaB244', 'XPS-Laptop'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestDeviceListPage');
  }

}
