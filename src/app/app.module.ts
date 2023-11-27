import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { Reservadas } from './services/Reservadas';
import { AnalizadorLexico } from './services/AnalizadorLexico';
import { HighlightWordsWithEDirective } from './diretivas/highlight-words-with-e.directive';
import { PackageDeclaration } from './services/semantico/implement/PackageDeclaration';
import { Statement } from './services/semantico/implement/Statement';
import { BlockStatement } from './services/semantico/implement/BlockStatement';
import { Block } from './services/semantico/implement/Block';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HighlightWordsWithEDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Reservadas,
    AnalizadorLexico,
    PackageDeclaration,
    Statement,
    BlockStatement,
    Block
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
