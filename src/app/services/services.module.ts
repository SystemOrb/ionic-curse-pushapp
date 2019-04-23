import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneSignalService } from './push/one-signal.service';

@NgModule({
  declarations: [],
  providers: [
    OneSignalService
  ],
  imports: [
    CommonModule
  ],
})
export class ServicesModule { }
