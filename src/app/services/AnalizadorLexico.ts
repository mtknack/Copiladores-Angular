import { Injectable } from '@angular/core';
import { Reservadas } from './Reservadas';
import { Identificadores } from './Identificadores';
import { ITabela, ITipo } from './ITabela';


@Injectable({
  providedIn: 'root',
})
export class AnalizadorLexico {
  reservadas: Reservadas;
  vetorDeTokens!: [ITabela];
  identificadores: Identificadores;
  
  constructor(reservadas: Reservadas, identificadores: Identificadores) {
    this.reservadas = reservadas;
    this.identificadores = identificadores;
  }

  private formatadorDeTexto(texto: string[]): string[] {
    // fazer a parte de formatar texto aqui
    return texto;
  }

  private processarTexto(texto: string): string {
    // Ignorar linhas que começam com // (com espaços antes ou depois)
    texto = texto.replace(/^\s*\/\/.*$/gm, '');

    // Ignorar blocos de comentários /* ... */ (incluindo espaços dentro dos delimitadores)
    texto = texto.replace(/\/\*[\s\S]*?\*\//g, '');

    return texto;
  }

  private separarTexto(texto: string): string[] {
    const textoSemComentario : string = this.processarTexto(texto);
    let vetorTexto : string[] = textoSemComentario
      .split(/\s+/)
      .filter((palavra) => palavra !== '');

    console.log(vetorTexto);

    let linhas: string[] = [];
    vetorTexto.forEach((x) => {
      if (
        x.includes('(') ||
        x.includes(')') ||
        x.includes('{') ||
        x.includes('}') ||
        x.includes('[') ||
        x.includes(']')
      ) {
        let substrings : string[] = x
          .split(/([()\[\]])/)
          .map((substring) => substring.trim())
          .filter((substring) => substring !== '');
        linhas.push(...substrings);
      } else {
        linhas.push(x);
      }
    });

    vetorTexto = linhas;

    return vetorTexto;
  }

  public analizar(texto: string): string[] {
    const textoVetor : string[] = this.separarTexto(texto);
    this.vetorDeTokens = [null];

    var i = 0;
    textoVetor.map((palavra) => {
      this.vetorDeTokens[i] = this.reservadas.buscaReservadas(palavra);
      //Verifica se e um identificador
      if (
        this.vetorDeTokens[i] == null &&
        this.identificadores.VerificarIdentificador(palavra)
      ) {
      this.vetorDeTokens[i] = palavra;
      }
      //Verfica se e uma string
      else if (/^".*"$/.test(palavra) || /^'.*'$/.test(palavra)) {
      this.vetorDeTokens[i] = palavra;
      }
      //Verifica se e um numero
      else if (/^-?\d+(\.\d+)?$/.test(palavra)) {
      this.vetorDeTokens[i] = palavra;
      }
      //Se nao e nada e um identificador invalido
      else if (this.vetorDeTokens[i] == null) {
      this.vetorDeTokens[i] = {
          id: i, 
          tipo: ITipo.IDENTIFICADOR_INVALIDO,
          textoOriginal:palavra,
          token: 'IDENTIFICADOR_INVALIDO',
      };
      }
      this.vetorDeTokens[i].id = i;
      i++;
    });

    console.log(this.vetorDeTokens);
    return this.formatadorDeTexto(this.vetorDeTokens);
  }
}
