import { Injectable } from '@angular/core';
import { Reservadas } from './Reservadas';
import { Identificadores } from './Identificadores';
import { ITabela, Tipo } from './ITabela';
import { IError } from './IError'

@Injectable({
  providedIn: 'root',
})
export class AnalizadorLexico {
  

  reservadas: Reservadas;
  vetorDeTokens!: [ITabela | null];
  identificadores: Identificadores;
  texto:string;

  constructor(reservadas: Reservadas, identificadores: Identificadores) {
    this.texto = "";
    this.reservadas = reservadas;
    this.identificadores = identificadores;
  }

  
  //TROCAR O TIPO DE RETORNO PRA IPALAVRA???
  private encontrarLinhaColuna(palavra:string):any{
    //trocar p interface dps???
    interface IPalavra {
      linha:number
      coluna:number
    }    
    
    const linhas = this.texto.split('\n');

    for (let i = 0; i < linhas.length; i++) {
      const linha = linhas[i];
      const j = linha.indexOf(palavra);
      if (j !== -1) {
        // Se a palavra for encontrada, retorne a linha e a coluna
        const palavra = { linha: i + 1, coluna: j + 1 };
        return palavra
      }
    }
    
  }

  private formatadorDeTexto(texto: [ITabela | null]): IError[] {
    // fazer a parte de formatar texto aqui
    let tabela: ITabela[] = [];
    var errors: IError[] = []
    texto.forEach((word) => {
      if (word != null && word.tipo == Tipo.IDENTIFICADOR_INVALIDO) {
        let obj = this.encontrarLinhaColuna(word.textoOriginal);
        tabela.push(word);
        errors.push({
          linha: obj.linha,
          coluna: obj.coluna,
          tipoError: word
        })
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
    this.texto = texto
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
