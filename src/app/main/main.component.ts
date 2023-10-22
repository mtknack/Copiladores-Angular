import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { AnalizadorLexico } from '../services/AnalizadorLexico';
import { ITabela } from '../services/ITabela';
import { IError } from '../services/IError';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements AfterViewInit {

  @ViewChild('textareaRef') textareaRef!: ElementRef;
  textareaLines!: number[];

  texto: string = 
`public class HelloWorld {
    public static void main(final String[] args) {
      System.out.println("Helooooooo");
    }
}`;

  textoConvertido: IError[] = [];
  constructor(private analizadorLexico: AnalizadorLexico) {}

  show(): boolean {
    if (this.textoConvertido.length == 0) {
      return true;
    }
    return false;
  }

  btnCopilar() {
    this.updateTextareaLines();
    this.textoConvertido = this.analizadorLexico.analizar(this.texto);
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
