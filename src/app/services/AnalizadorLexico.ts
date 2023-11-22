import { Injectable } from '@angular/core';
import { Reservadas } from './Reservadas';
import { Identificadores } from './Identificadores';
import { IToken, Tipo } from './Interfaces';
import { AnalizadorSemantico } from './AnalisadorSemantico';

@Injectable({
  providedIn: 'root',
})
export class AnalizadorLexico {
  reservadas: Reservadas;
  vetorDeTokens: IToken[];
  identificadores: Identificadores;

  constructor(reservadas: Reservadas, identificadores: Identificadores, private analisadorSemantico: AnalizadorSemantico) {
    this.vetorDeTokens = [];
    this.reservadas = reservadas;
    this.identificadores = identificadores;
  }

  public getErrosLexicos(texto: IToken[]): IToken[] {
    // fazer a parte de formatar texto aqui
    var errors: IToken[] = []
    texto!.forEach((text,index) => {
      if (text != null && text.tipo == Tipo.IDENTIFICADOR_INVALIDO) {
        errors.push(text);
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
        x.includes(']') || 
        x.includes(';') 
      ) {
        let substrings: string[] = x
          .split(/([()\;[\]])/)
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

  public getPosicaoPalavra(texto:string, palavra:string, token:IToken|null, linhaInicioBusca:number, colIniBuscaLinhaIni:number) {
    let colunaInicioBusca: number = colIniBuscaLinhaIni
    var linhas = texto.split('\n');  // Dividir o texto em linhas
    for (var i = linhaInicioBusca; i < linhas.length; i++) {
        var coluna = linhas[i].indexOf(palavra, colunaInicioBusca);
        colunaInicioBusca = 0
        if (coluna !== -1) {
          // A palavra foi encontrada na linha i, coluna coluna
          token!.linha = i+1
          token!.coluna = coluna+1
          break
        }
    }
    /* console.log(`Palavra: '${palavra}'; Linha: ${token!.linha}; Coluna ${token!.coluna}`) */
  }




  public analizar(texto: string): IToken[] {
    const textoVetor: string[] = this.separarTexto(texto);
    let linhaInicioBusca: number = 0
    let colunaInicioBusca: number = 0
    
    this.vetorDeTokens = [];

    var i = 0;
    textoVetor.map((palavra,linha) => {
      let tokenAux = this.reservadas.buscaReservadas(palavra);

      //Verifica se e um identificador
      if (
        tokenAux == null &&
        this.identificadores.VerificarIdentificador(palavra)
      ) {
        tokenAux = {
          id: i,
          tipo: Tipo.IDENTIFICADOR_VALIDO,
          textoOriginal: palavra,
          token: 'IDENTIFICADOR_VALIDO',
        };
      }
      //Verfica se e uma string
      else if (/^".*"$/.test(palavra) || /^'.*'$/.test(palavra)) {
        tokenAux = {
          id: i,
          tipo: Tipo.STRING,
          textoOriginal: palavra,
          token: 'STRING',
        };
      }
      //Verifica se e um numero
      else if (/^-?\d+(\.\d+)?$/.test(palavra)) {
        tokenAux = {
          id: i,
          tipo: Tipo.NUMBER,
          textoOriginal: palavra,
          token: 'NUMBER',
        };
      }
      //Se nao e nada e um identificador invalido
      else if (tokenAux == null) {
        tokenAux = {
          id: i,
          tipo: Tipo.IDENTIFICADOR_INVALIDO,
          textoOriginal: palavra,
          token: 'IDENTIFICADOR_INVALIDO',
        };
      }

      if(tokenAux != null){
        this.vetorDeTokens.push(tokenAux)
      }
      this.getPosicaoPalavra(texto, palavra, this.vetorDeTokens[i], linhaInicioBusca, colunaInicioBusca);
      linhaInicioBusca = this.vetorDeTokens[i].linha!.valueOf() - 1;
      /* console.log(`Linha Endereço: ${linhaInicioBusca}`) */
      colunaInicioBusca = this.vetorDeTokens[i].coluna!.valueOf() + palavra.length - 1;
      /* console.log(`Coluna Endereço: ${colunaInicioBusca}`) */
      this.vetorDeTokens[i]!.id = i;
      i++;
      

    });

    // this.analisadorSemantico.initializeVariables(this.vetorDeTokens)

    // this.vetorDeTokens.forEach((value) => {console.log(value)})
    // console.log(this.vetorDeTokens)
    return this.vetorDeTokens;
  }
}
