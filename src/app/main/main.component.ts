import { Component } from '@angular/core';
import { AnalizadorLexico } from '../services/AnalizadorLexico';
import { ITabela } from '../services/ITabela';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  texto: string = `public class HelloWorld {
    public static void main(final String[] args) {
      System.out.println("Helooooooo");
    }
  }`;

  textoConvertido: ITabela[] = [];

  constructor(private analizadorLexico: AnalizadorLexico) {}

  show(): boolean {
    if (this.textoConvertido.length == 0) {
      return true;
    }
    return false;
  }

  btnCopilar() {
    this.textoConvertido = this.analizadorLexico.analizar(this.texto);
    console.log(this.textoConvertido);
  }
}
