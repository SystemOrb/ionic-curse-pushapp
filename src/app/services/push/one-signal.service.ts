import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OneSignalService {

  constructor(private oneSignal: OneSignal, private platform: Platform) { }

  init_push() {
    if (this.platform.is('cordova')) {
      this.oneSignal.startInit('a1da1802-8ed8-4f65-99a3-3b1aa6fa37ab', '1090236473786');
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      this.oneSignal.handleNotificationReceived().subscribe(() => {
   // do something when notification is received
        console.log('notificación recibida');
  });
      this.oneSignal.handleNotificationOpened().subscribe(() => {
        console.log('notificación abierta');
    // do something when a notification is opened
  });
      this.oneSignal.endInit();
       } else {
         console.log('push web notify');
       }
    }
}
