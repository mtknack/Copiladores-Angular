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
    vetorError: [String | null] = [null]

    constructor() { }

    private skipIndex() {
        if (this.object.atual < this.object.tokens.length-1) {
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

    public validaRegras(arrayDeRegras:any[]){
        // let inicio_index = this.getIndex()
        // for (let index = 0; index < arrayDeRegras.length; index++) {
        //     let regra = arrayDeRegras[index];
            
        // }

        arrayDeRegras.forEach((regra,index)=>{
            try{
                this.validaRegra(regra)
                return
            }
            catch(erro:any){
            // this.setIndex(inicio_index);
                if(index == arrayDeRegras.length-1){
                    throw(erro)
                }
            }
        })
    }
    

    public validaRegra(arrayDeToken: any[]) {
        let primeiroIndex = this.getIndex();

        let tentarDenovo = false;
        let newArrayDeToken: any[]
        let newOptionalTokens: number[]
        try {
            arrayDeToken.map((tipoToken, index) => {                
                if (typeof tipoToken === typeof '') {
                    this.validaPalavraReservada(tipoToken);
                } else if (typeof tipoToken === typeof 1) {
                    this.validaTipoTokenAtual(tipoToken);
                } else {
                    tipoToken.processar();
                }
            });
        } catch (erro) {
            this.setIndex(primeiroIndex);
            throw erro
        }
    }

    public validaPalavraReservada(regra: string) {
        if (this.object.tokens[this.object.atual].token != regra) {
            // throw new Error(`Error de verificação em validar: ${this.object.tokens[this.object.atual].token} == ${regra} `)
            throw new Error(`Esperando "${regra}" na linha ${this.object.tokens[this.object.atual].linha}`)
        }
        this.skipIndex()
    }
    
    public validaPalavraReservadaSemPular(regra: string) {
        if (this.object.tokens[this.object.atual].token == regra) {
            return true
        }
        return false
    }

    public validaTipoTokenAtual(tipo: Number) {
        if (this.object.tokens[this.object.atual].tipo != tipo) {
            // throw new Error(`Error de verificação de tipo em validar tipo: ${this.object.tokens[this.object.atual].tipo} === ${tipo} `)
            throw new Error(`Esperado um identificador valido na linha ${this.object.tokens[this.object.atual].linha}`)
            
        }
        this.skipIndex()
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