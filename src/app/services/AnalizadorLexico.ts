import { Injectable } from '@angular/core';
import { Reservadas } from './Reservadas';
import { Identificadores } from './Identificadores';

@Injectable({
    providedIn: 'root'
})
export class AnalizadorLexico {

    reservadas: Reservadas;
    vetorDeToekens: [string] = ['']
    identificadores: Identificadores

    constructor(
        reservadas: Reservadas,
        identificadores: Identificadores
    ) {
        this.reservadas = reservadas;
        this.identificadores = identificadores
    }

    private formatadorDeTexto(texto: string[]): string[] {

        // fazer a parte de formatar texto aqui
        return texto
    }

    private processarTexto(texto: string): string {
        // Ignorar linhas que começam com // (com espaços antes ou depois)
        texto = texto.replace(/^\s*\/\/.*$/gm, '');

        // Ignorar blocos de comentários /* ... */ (incluindo espaços dentro dos delimitadores)
        texto = texto.replace(/\/\*[\s\S]*?\*\//g, '');

        return texto;
    }

    private separarTexto(texto: string): string[] {

        var textoSemComentario = this.processarTexto(texto);
        var vetorTexto = textoSemComentario.split(/\s+/).filter(palavra => palavra !== '');

        console.log(vetorTexto)

        let linhas: string[] = [];
        vetorTexto.forEach(x => {
            if (
                x.includes('(')
                || x.includes(')')
                || x.includes('{')
                || x.includes('}')
                || x.includes('[')
                || x.includes(']')
            ) {
                let substrings = x.split(/([()\[\]])/).map(substring => substring.trim()).filter(substring => substring !== '');
                linhas.push(...substrings);
            } else {
                linhas.push(x);
            }
        });

        vetorTexto = linhas

        return vetorTexto
    }

    public analizadorLexico(texto: string): string[] {

        const textoVetor = this.separarTexto(texto)
        this.vetorDeToekens = [''];

        var i = 0
        textoVetor.map(palavra => {
            
            this.vetorDeToekens[i] = this.reservadas.buscaReservadas(palavra)
            if (this.vetorDeToekens[i] == 'N/A' && this.identificadores.VerificarIdentificador(palavra)) {
                this.vetorDeToekens[i] = palavra
            }
            else if (/^".*"$/.test(palavra)) {
                this.vetorDeToekens[i] = palavra;
            }
            else if (this.vetorDeToekens[i] == 'N/A') {
                this.vetorDeToekens[i] = 'IdetificadorInvalido'
            }

            i++
        })

        console.log(this.vetorDeToekens)
        return this.formatadorDeTexto(this.vetorDeToekens)
    }

}
