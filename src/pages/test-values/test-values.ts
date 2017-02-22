import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TestValues page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-test-values',
  templateUrl: 'test-values.html'
})
export class TestValuesPage {

  sensors = [{name:'Temperature', value:'23.6'},{name:'Humidity', value:'56'},{name:'Pressure', value:'1031'},{name:'Loudness', value:'73'},
    {name:'CO2', value:'983'}, {name:'CO', value:'21'}, {name: 'Smoke', value:''}, {name:'Ethanol', value:'718'}, {name:'NOx', value: '43'}];
  icons = ['thermometer', 'water', 'speedometer', 'megaphone', 'cloud', 'cloud-outline', 'flame', 'analytics', 'cloudy'];
  units = ['°C', '%', 'mb', 'Hz', 'ppm', 'ppm', 'ppm', 'ppm', 'ppm'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestValuesPage');
  }

}
