import { Component, OnInit } from '@angular/core';
import { OneSignalService } from '../services/push/one-signal.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private Push: OneSignalService) {}

  ngOnInit() {
    this.Push.init_push();
  }
}
