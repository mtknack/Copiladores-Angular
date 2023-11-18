import { ElementRef, Injectable } from "@angular/core";
import { IObjectInfo } from "./IObjectInfo";
import { Arvore } from "./Arvore";
import { IToken, Tipo } from "../../Interfaces";
import { IObjectLog } from "./Log";
import {  } from "../../Interfaces"
import { PalavrasReservadas } from "../../Reservadas";

@Injectable({
    providedIn: 'root', // Este serviço será injetado em toda a aplicação
})
export class ObjectService {

    object!: IObjectInfo

    constructor(){}

    private skipIndex(){
        if(this.object.atual <= this.object.tokens.length && this.object.atual >= 0){
            this.object.atual++
        }
    }

    private backIndex(){
        
        if(this.object.atual <= this.object.tokens.length && this.object.atual >= 0){
            this.object.atual--
        }
    }

    private getIndex(){
        return this.object.atual;
    }

    private setIndex(newIndex:number){
        this.object.atual = newIndex;
    }

    getObject(): IObjectInfo{
        return this.object
    }

    setObject(object: IObjectInfo ){
        this.object = object
    }

    public validaRegra(arrayDeToken:any[],optionalTokens:number[]):boolean{
        let qtdToken = arrayDeToken.length;
        let arrayVerdade = []
        let verdadeFinal = true
        let primeiroIndex = this.getIndex();
        let teste 
        let indexErro = this.object.atual
        let tipoErro;
        for (let i = 0; i < qtdToken; i++) {
            teste = false
            tipoErro = arrayDeToken[i];
            if(typeof arrayDeToken[i] == typeof ``){
                teste = this.validaPalavraReservada(arrayDeToken[i]);
            }else if(typeof arrayDeToken[i] == typeof 10){
                teste = this.validaTipoTokenAtual(arrayDeToken[i]);
            }
            else{
                teste = arrayDeToken[i].processar();
            }
            if(teste == false){
                if(i in optionalTokens){
                    continue
                }
                indexErro = this.object.atual
                verdadeFinal = false
                break
            }
            this.skipIndex();
        }
        if (verdadeFinal == false) {
            this.criaErro(tipoErro)
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

    criaErro(esperado:any){
        if(typeof esperado == typeof ``){
            this.object.tokens[this.object.atual].erro = `"${esperado}" esperado na linha=${this.object.tokens[this.object.atual].linha} coluna=${this.object.tokens[this.object.atual].coluna}` 
        }else if(typeof esperado == typeof 10){
            this.object.tokens[this.object.atual].erro = `Tipo ${esperado} esperado na linha=${this.object.tokens[this.object.atual].linha} coluna=${this.object.tokens[this.object.atual].coluna}`
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
            // console.log('entrando em: ', log, this.object)
        }
        // console.log('saindo de: ', log, this.object)
    }

    assembleTree(){

    }
}