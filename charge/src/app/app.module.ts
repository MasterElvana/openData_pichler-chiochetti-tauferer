import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentstationComponent } from './currentstation/currentstation.component';
import { CurrentplugsComponent } from './currentplugs/currentplugs.component';
import { AccessComponent } from './access/access.component';
import { NumberComponent } from './number/number.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentstationComponent,
    CurrentplugsComponent,
    AccessComponent,
    NumberComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
