import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Reservadas } from './services/Reservadas';
import { AnalizadorLexico } from './services/AnalizadorLexico';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Reservadas,
    AnalizadorLexico
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
