import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import {MicroServicesModule} from '../../../micro-services/src/lib/micro-services.module';
import {MicroServicesModule} from 'micro-services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MicroServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
