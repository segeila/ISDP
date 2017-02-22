import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CloudSensorsIndexPage} from "../pages/cloud-sensors-index/cloud-sensors-index";
import {CloudSensorsGraphPage} from "../pages/cloud-sensors-graph/cloud-sensors-graph";
import {Data} from "../providers/data";
import {BluetoothDevicesListPage} from "../pages/bluetooth-devices-list/bluetooth-devices-list";
import {ControlPage} from "../pages/control/control";
import {IntroSlidesPage} from "../pages/intro-slides/intro-slides";
import {BluetoothSensorsListPage} from "../pages/bluetooth-sensors-list/bluetooth-sensors-list";
import {TestDeviceListPage} from "../pages/test-device-list/test-device-list";
import {TestValuesPage} from "../pages/test-values/test-values";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CloudSensorsIndexPage,
    CloudSensorsGraphPage,
    BluetoothDevicesListPage,
    ControlPage,
    IntroSlidesPage,
    BluetoothSensorsListPage,
    TestDeviceListPage,
    TestValuesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CloudSensorsIndexPage,
    CloudSensorsGraphPage,
    BluetoothDevicesListPage,
    ControlPage,
    IntroSlidesPage,
    BluetoothSensorsListPage,
    TestDeviceListPage,
    TestValuesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
