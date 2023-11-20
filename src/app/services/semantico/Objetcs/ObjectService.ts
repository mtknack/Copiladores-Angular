import { ElementRef, Injectable } from "@angular/core";
import { IObjectInfo } from "./IObjectInfo";
import { Arvore } from "./Arvore";
import { IToken, Tipo } from "../../Interfaces";
import { IObjectLog } from "./Log";
import { } from "../../Interfaces"
import { PalavrasReservadas } from "../../Reservadas";

@Injectable({
    providedIn: 'root', // Este serviço será injetado em toda a aplicação
})
export class ObjectService {

    object!: IObjectInfo
    vetorDeLog: [any] = [null]

    constructor() { }

    private skipIndex() {
        if (this.object.atual <= this.object.tokens.length && this.object.atual >= 0) {
            this.object.atual++
        }
    }

    private backIndex() {

        if (this.object.atual <= this.object.tokens.length && this.object.atual >= 0) {
            this.object.atual--
        }
    }

    private getIndex() {
        return this.object.atual;
    }

    private setIndex(newIndex: number) {
        this.object.atual = newIndex;
    }

    getObject(): IObjectInfo {
        return this.object
    }

    setObject(object: IObjectInfo) {
        this.object = object
    }


    public gerarCombinacoes(vetorObjetos: any, vetorOpcionais: number[]) {
        const resultado: any = [];

        function combinarComOpcionais(indicesOpcionais: number[]) {
            const combinacao = [];
            for (let i = 0; i < vetorObjetos.length; i++) {
                if (!indicesOpcionais.includes(i)) {
                    combinacao.push(vetorObjetos[i]);
                }
            }
            resultado.push(combinacao);
        }

        function gerarCombinacoesRecursivas(indicesOpcionais: number[], posicao: number) {
            if (posicao === vetorObjetos.length) {
                combinarComOpcionais(indicesOpcionais);
                return;
            }

            // Objeto atual é opcional
            gerarCombinacoesRecursivas([...indicesOpcionais, posicao], posicao + 1);

            // Objeto atual não é opcional
            gerarCombinacoesRecursivas(indicesOpcionais, posicao + 1);
        }

        gerarCombinacoesRecursivas([], 0);

        return resultado;
    }

    public validaRegraOpcional(arrayDeToken: any[], optionalTokens: number[]) {
        //([IMPORT, IDENTIFICADOR],[0,1])
        //[IMPORT, IDENTIFICADOR]
        //[IMPORT]
        //[IDENTIFICADOR]
        // 
        let qtd = optionalTokens.length
        let possibilidades: any[] = []
        for (let i = 0; i < optionalTokens.length; i++) {
            let possibilidade = arrayDeToken
            let tokenAremover = arrayDeToken[optionalTokens[i]]
            for (let j = 0; j < optionalTokens.length; j++) {
                possibilidade.filter((token, index) => index)
            }
            const element = optionalTokens[i];
        }
        // possibilidades.forEach((regra)=>this.validaRegra(regra))
        // console.log(possibilidades)
    }

    public validaRegra(arrayDeToken: any[]) {
        let primeiroIndex = this.getIndex();

        let tentarDenovo = false;
        let newArrayDeToken: any[]
        let newOptionalTokens: number[]
        try {
            arrayDeToken.map((tipoToken, index) => {
                // console.log(this.object.tokens[this.object.atual].token, tipoToken, this.object.atual)
                try {
                    if (typeof tipoToken === typeof '') {
                        this.validaPalavraReservada(tipoToken);
                        this.skipIndex();

                    } else if (typeof tipoToken === typeof 1) {
                        this.validaTipoTokenAtual(tipoToken);
                        this.skipIndex();
                    } else {
                        tipoToken.processar();
                    }
                } catch (error) {
                    // if(index in optionalTokens){

                    //     newArrayDeToken = arrayDeToken.filter((token,idx)=>idx != index)
                    //     newOptionalTokens = optionalTokens.filter((t)=> t!=index).map(elem=> elem-1)
                    //     // console.log(newArrayDeToken, newOptionalTokens)
                    //     tentarDenovo = true;
                    //     this.setIndex(primeiroIndex);
                    // }
                    throw error;
                }
            });
        } catch (erro) {
            // if(tentarDenovo){

            //     this.validaRegra(newArrayDeToken,newOptionalTokens)
            // }
            this.setIndex(primeiroIndex);
            throw erro
        }
    }

    private validaPalavraReservada(regra: string) {
        if (this.object.tokens[this.object.atual].token != regra) {
            throw new Error(`Error de verificação em validar: ${this.object.tokens[this.object.atual].token} == ${regra} `)
        }
    }

    private validaTipoTokenAtual(tipo: Number) {
        if (this.object.tokens[this.object.atual].tipo != tipo) {
            throw new Error(`Error de verificação de tipo em validar tipo: ${this.object.tokens[this.object.atual].tipo} === ${tipo} `)
        }
    }

    newObject(tokens: IToken[]) {
        var x = {
            tokens: tokens,
            atual: 0,
            arvore: this.newArvore()
        }

        this.setObject(x)
    }

    newArvore(): Arvore {
        return {
            vetor: []
        }
    }

    logStatusSemantico(log: IObjectLog, entrada: boolean) {
        if (entrada) {
            this.vetorDeLog.push(`entrando em: ${log.analise} virificando: ${this.object.tokens[this.object.atual].token} original: ${this.object.tokens[this.object.atual].textoOriginal}`);
        }
        else {
            this.vetorDeLog.push(`saindo de: ${log.analise} virificando: ${this.object.tokens[this.object.atual].token} original: ${this.object.tokens[this.object.atual].textoOriginal}`);
        }
    }

    printVetorLog(): any {
        return this.vetorDeLog;
    }

    resetVetorLog() {
        this.vetorDeLog = [null];
    }

    assembleTree() {

    }
}

//PROGRAM -> PACKAGE IMPORT CLASS