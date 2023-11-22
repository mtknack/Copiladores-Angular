import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AnalizadorLexico } from '../services/AnalizadorLexico';
import { IToken } from '../services/Interfaces';
import { AnalizadorSemantico } from '../services/AnalisadorSemantico';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {

  @ViewChild('textareaRef') textareaRef!: ElementRef;
  textareaLines!: number[];
  selectCopiler: number = 0

  texto: string = 
`package br.biblioteca.telas;
import java.awt.List;
import java.util.List;
import java.util.ArrayList;`;

  Erros: IToken[] = [];
  Tokens: IToken[] = [];
  ErrosTemporario: string = ''
  // Arovre: Arvore
  constructor(private analizadorLexico: AnalizadorLexico, private analizadorSemantico: AnalizadorSemantico) {}

  show(): boolean {
    if (this.Erros.length == 0) {
      return true;
    }
    return false;
  }
  showSemantico():boolean{
    if (this.ErrosTemporario.length == 0) {
      return true;
    }
    return false;
  }

  btnCopilar() {
    this.updateTextareaLines();

    switch(this.selectCopiler){
      case 0:
        console.log(this.selectCopiler)
        this.Tokens = this.analizadorLexico.analizar(this.texto);
        this.Erros = this.analizadorLexico.getErrosLexicos(this.Tokens)
        break
      case 1:
        console.log(this.selectCopiler)
        this.Tokens = this.analizadorLexico.analizar(this.texto);
        this.Erros = this.analizadorLexico.getErrosLexicos(this.Tokens)
        if(this.Erros.length == 0){
          let msgErro = this.analizadorSemantico.initializeVariables(this.Tokens)
          if(msgErro == undefined){
            this.ErrosTemporario = ''
          }
          else{
            this.ErrosTemporario = msgErro.__zone_symbol__value.message
          }
          
          
        }
        break
      case 2:
        console.log(this.selectCopiler)
        break
    }
    // this.Tokens = this.analizadorLexico.analizar(this.texto);
    // this.Erros = this.analizadorLexico.getErrosLexicos(this.Tokens)
    // let teste = this.analizadorSemantico.initializeVariables(this.Tokens)
  }

  ngAfterViewInit(): void {
    this.updateTextareaLines();
  }

  // So funciona dps de copilar a primeira vez, se o texto base estiver vazio funciona de boa
  updateTextareaLines() {
    const lines = this.textareaRef.nativeElement.value.split('\n');
    this.textareaLines = Array.from({ length: lines.length }, (_, i) => i + 1);
  }

  tipoAnalisador(): String {
    switch(this.selectCopiler){
      case 0:
        return 'Lexico'
      break
      case 1:
        return 'Semantico'
      break
      case 2:
        return 'Sintatico'
      break
      default:
        return ''
      break
    }
  }
}
