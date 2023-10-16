import { Component } from '@angular/core';
import { AnalizadorLexico } from '../services/AnalizadorLexico';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  texto: string = `public class HelloWorld {
    public static void main(final String[] args) {
      System.out.println("Helooooooo");
    }
  }`;

  textoConvertido: string[] = ['']

  constructor(
    private analizadorLexico: AnalizadorLexico
  ){

  }

  btnCopilar() {
    this.textoConvertido = this.analizadorLexico.analizadorLexico(this.texto)
  }
}
