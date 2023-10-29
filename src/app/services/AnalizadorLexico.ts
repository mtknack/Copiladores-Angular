import { Injectable } from '@angular/core';
import { Reservadas } from './Reservadas';
import { Identificadores } from './Identificadores';
import { ITabela, Tipo } from './ITabela';
import { IError } from './IError';
import { ILocalPalavra } from './ILocalPalavra';

@Injectable({
  providedIn: 'root',
})
export class AnalizadorLexico {
  reservadas: Reservadas;
  vetorDeTokens!: [ITabela | null];
  identificadores: Identificadores;
  texto: string;

  constructor(reservadas: Reservadas, identificadores: Identificadores) {
    this.texto = '';
    this.reservadas = reservadas;
    this.identificadores = identificadores;
  }

  //preciso somar os espacos em branco que vem antes de uma palavra
  private encontrarLinhaColuna(idPalavra: number): ILocalPalavra {
    const linhas: string[] = this.texto.split('\n');
    debugger;

    let idAtual = 0;
    let palavraBuscada: ILocalPalavra = {
      coluna: -1,
      linha: -1,
    };
    for (let indexLinha = 0; indexLinha < linhas.length; indexLinha++) {
      let coluna: number = 1;

      const linha = linhas[indexLinha];

      const linhavetorizada = linha.split(' ');

      let aux: string[] = [];
      linhavetorizada.forEach((x) => {
        if (
          x.includes('(') ||
          x.includes(')') ||
          x.includes('{') ||
          x.includes('}') ||
          x.includes('[') ||
          x.includes(']')
        ) {
          let substrings: string[] = x
            .split(/([()\[\]])/)
            .map((substring) => substring.trim())
            .filter((substring) => substring !== '');
          aux.push(...substrings);
        } else {
          aux.push(x);
        }
      });

      aux.forEach((palavra) => {
        if (palavra == '') {
          coluna++;
        } else {
          if (idPalavra == idAtual) {
            palavraBuscada.coluna = coluna;
            palavraBuscada.linha = indexLinha;
          }
          idAtual++;
          coluna = coluna + palavra.length + 1;
        }
      });
    }
    return palavraBuscada;
  }

  private formatadorDeTexto(texto: [ITabela | null]): IError[] {
    // fazer a parte de formatar texto aqui
    let tabela: ITabela[] = [];
    var errors: IError[] = [];
    texto.forEach((word) => {
      if (word != null && word.tipo == Tipo.IDENTIFICADOR_INVALIDO) {
        let obj: ILocalPalavra = this.encontrarLinhaColuna(word.id!);
        tabela.push(word);
        errors.push({
          linha: obj.linha,
          coluna: obj.coluna,
          tipoError: word,
        });
      }
    });

    return errors;
  }

  private processarTexto(texto: string): string {
    // Ignorar linhas que começam com // (com espaços antes ou depois)
    texto = texto.replace(/^\s*\/\/.*$/gm, '');

    // Ignorar blocos de comentários /* ... */ (incluindo espaços dentro dos delimitadores)
    texto = texto.replace(/\/\*[\s\S]*?\*\//g, '');

    return texto;
  }

  private separarTexto(texto: string): string[] {
    const textoSemComentario: string = this.processarTexto(texto);
    let vetorTexto: string[] = textoSemComentario
      .split(/\s+/)
      .filter((palavra) => palavra !== '');

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
        let substrings: string[] = x
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

  public analizar(texto: string): IError[] {
    this.texto = texto;
    const textoVetor: string[] = this.separarTexto(texto);
    this.vetorDeTokens = [null];

    var i = 0;
    textoVetor.map((palavra) => {
      //Verifica se palavra reservada
      this.vetorDeTokens[i] = this.reservadas.buscaReservadas(palavra);
      //Verifica se e um identificador
      if (
        this.vetorDeTokens[i] == null &&
        this.identificadores.VerificarIdentificador(palavra)
      ) {
        this.vetorDeTokens[i] = {
          id: i,
          tipo: Tipo.IDENTIFICADOR_VALIDO,
          textoOriginal: palavra,
          token: 'IDENTIFICADOR_VALIDO',
        };
      }
      //Verfica se e uma string
      else if (/^".*"$/.test(palavra) || /^'.*'$/.test(palavra)) {
        this.vetorDeTokens[i] = {
          id: i,
          tipo: Tipo.STRING,
          textoOriginal: palavra,
          token: 'STRING',
        };
      }
      //Verifica se e um numero
      else if (/^-?\d+(\.\d+)?$/.test(palavra)) {
        this.vetorDeTokens[i] = {
          id: i,
          tipo: Tipo.NUMBER,
          textoOriginal: palavra,
          token: 'NUMBER',
        };
      }
      //Se nao e nada e um identificador invalido
      else if (this.vetorDeTokens[i] == null) {
        this.vetorDeTokens[i] = {
          id: i,
          tipo: Tipo.IDENTIFICADOR_INVALIDO,
          textoOriginal: palavra,
          token: 'IDENTIFICADOR_INVALIDO',
        };
      }
      this.vetorDeTokens[i]!.id = i;
      i++;
    });

    return this.formatadorDeTexto(this.vetorDeTokens);
  }
}
