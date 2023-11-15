import { ElementRef, Injectable } from "@angular/core";
import { IObjectInfo } from "./IObjectInfo";
import { Arvore } from "./Arvore";
import { IToken, Tipo } from "../../ITabela";
import { IObjectLog } from "./Log";
import {  } from "../../ITabela"

@Injectable({
    providedIn: 'root', // Este serviço será injetado em toda a aplicação
})
export class ObjectService {

    object!: IObjectInfo

    constructor(){}

    skipIndex(){
        if(this.object.atual <= this.object.tokens.length && this.object.atual >= 0){
            this.object.atual++
        }
    }

    backIndex(){
        
        if(this.object.atual <= this.object.tokens.length && this.object.atual >= 0){
            this.object.atual--
        }
    }

    getIndex(){
        return this.object.atual;
    }

    setIndex(newIndex:number){
        this.object.atual = newIndex;
    }

    getObject(): IObjectInfo{
        return this.object
    }

    setObject(object: IObjectInfo ){
        this.object = object
    }

    validaRegra(arrayDeToken:any[]):boolean{
        let qtdPalavra = arrayDeToken.length;
        let arrayVerdade = []
        let verdadeFinal = true
        let primeiroIndex = this.getIndex();
        for (let i = 0; i < qtdPalavra; i++) {
            let teste = false;

            if(typeof arrayDeToken[i] == typeof ``){
                teste = this.validaPalavraReservada(arrayDeToken[i]);
            }else if(typeof arrayDeToken[i] == typeof 10){
                teste = this.validaTipoTokenAtual(arrayDeToken[i]);
            }
            else{
                teste = arrayDeToken[i].processar();
            }

            arrayVerdade.push(teste);
            if(arrayVerdade[i] == false){
                verdadeFinal = false
                break
            }
            this.skipIndex();
        }
        if (verdadeFinal == false) {
            this.setIndex(primeiroIndex);
            return false
        }
        return true
    }

    validaPalavraReservada(regra: string){
        if(this.object.tokens[this.object.atual].token == regra){
            return true
        }
        else{
            return false
            // throw new Error(`Error de verificação em validar: ${this.object.tokens[this.object.atual].token} == ${regra} `)
        }
    }

    validaTipoTokenAtual(tipo: Number){
        if(this.object.tokens[this.object.atual].tipo == tipo){
            return true
        }
        else{
            return false
            // throw new Error(`Error de verificação de tipo em validar tipo: ${this.object.tokens[this.object.atual].token} === ${tipo} `)
        }
    }

    newObject(tokens: IToken[]){
        var x = {
            tokens: tokens,
            atual: 0,
            arvore: this.newArvore()
        }

        this.setObject(x)
    }

    newArvore(): Arvore{
        return{
            vetor: []
        }
    }

    logStatusSemantico(log: IObjectLog, entrada: boolean){
        if(entrada){
            console.log('entrando em: ', log, this.object)
        }
        console.log('saindo de: ', log, this.object)
    }

    assembleTree(){

    }
}