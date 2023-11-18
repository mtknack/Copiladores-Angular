import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AnalizadorLexico } from '../services/AnalizadorLexico';
import { IToken } from '../services/Interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {

  @ViewChild('textareaRef') textareaRef!: ElementRef;
  textareaLines!: number[];

  texto: string = 
`package br.biblioteca.telas;
import java.awt.List;
import java.util.List;
import java.util.ArrayList;`;

  Erros: IToken[] = [];
  Tokens: IToken[] = [];
  constructor(private analizadorLexico: AnalizadorLexico) {}

  show(): boolean {
    if (this.Erros.length == 0) {
      return true;
    }
    return false;
  }

  btnCopilar() {
    this.updateTextareaLines();
    this.Tokens = this.analizadorLexico.analizar(this.texto);
    this.Erros = this.analizadorLexico.getErrosLexicos(this.Tokens)
    console.log(this.Erros)
  }

  ngAfterViewInit(): void {
    this.updateTextareaLines();
  }

  // So funciona dps de copilar a primeira vez, se o texto base estiver vazio funciona de boa
  updateTextareaLines() {
    const lines = this.textareaRef.nativeElement.value.split('\n');
    this.textareaLines = Array.from({ length: lines.length }, (_, i) => i + 1);
  }

}
