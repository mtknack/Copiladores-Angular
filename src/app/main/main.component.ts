import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AnalizadorLexico } from '../services/AnalizadorLexico';
import { IToken } from '../services/Interfaces';
import { AnalizadorSemantico } from '../services/AnalisadorSemantico';
import * as javaparser7Min from '../services/semantico/Objetcs/javaparser7.min.js';

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
public class teste { 
    public int str(int teste) {
 ; `;

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
        this.Tokens = this.analizadorLexico.analizar(this.texto);
        this.Erros = this.analizadorLexico.getErrosLexicos(this.Tokens)
        break
      case 1:        
        // this.Tokens = this.analizadorLexico.analizar(this.texto);
        // this.Erros = this.analizadorLexico.getErrosLexicos(this.Tokens)
        // if(this.Erros.length == 0){
        //   let msgErro = this.analizadorSemantico.initializeVariables(this.Tokens)
        //   if(msgErro == undefined){
        //     this.ErrosTemporario = ''
        //   }
        //   else{
        //     this.ErrosTemporario = msgErro.__zone_symbol__value.message
        //   }
        // }
        // console.clear()
        let filtrar = ["@","enum",'//', '/*',`0b`,`0B`,`0X`,`0x`]
        if('parse' in javaparser7Min){
          let msgDoErro = ''
          try{
            let teste = javaparser7Min.parse(this.texto)
            this.ErrosTemporario = ``
          }catch(erro:any){
            msgDoErro = `Esperando `
            let t = erro.expected.filter((t:any) => t.text != undefined )
            for (let i = t.length-1; i >= t.length-5; i--) {
              msgDoErro += '"' + t[i].text + '" ou '
            }
            if(!(t[t.length-6].text in filtrar)){
              msgDoErro += '"' + t[t.length-6].text + '"'
            }
            msgDoErro += " na linha " + erro.location.start.line + ' coluna ' +erro.location.start.column
            console.log(msgDoErro)
            this.ErrosTemporario = msgDoErro
          }
        }
        else{
          console.log("nao funcionou");
        }
        break
      case 2:
        // console.log(this.selectCopiler)
        break
    }
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
