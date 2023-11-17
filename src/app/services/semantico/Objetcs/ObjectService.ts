import { ElementRef, Injectable } from "@angular/core";
import { IObjectInfo } from "./IObjectInfo";
import { Arvore } from "./Arvore";
import { ITabela, Tipo } from "../../ITabela";
import { IObjectLog } from "./Log";
import {  } from "../../ITabela"

@Injectable({
    providedIn: 'root', // Este serviço será injetado em toda a aplicação
})
export class ObjectService {

    object!: IObjectInfo
    vetorDeLog: [any] = [null]

    constructor(){}

    async skipIndex(){
        if(this.object.atual <= this.object.tokens.length && this.object.atual >= 0){
            this.object.atual++
        }
    }

    async backIndex(){
        
        if(this.object.atual <= this.object.tokens.length && this.object.atual >= 0){
            this.object.atual--
        }
    }

    getObject(): IObjectInfo{
        return this.object
    }

    async setObject(object: IObjectInfo ){
        this.object = object
    }

    async getVetorTokensAtual(regra: string){
        if(this.object.tokens[this.object.atual].token != regra){
            throw new Error(`Error de verificação em validar: ${this.object.tokens[this.object.atual].token} == ${regra} `)
        }
    }

    async getVetorTokensAtualVerifique(tipo: Number){
        if(this.object.tokens[this.object.atual].tipo != tipo){
            throw new Error(`Error de verificação de tipo em validar tipo: ${this.object.tokens[this.object.atual].token} === ${tipo} `)
        }
    }

    async newObject(tokens: [ITabela]){
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

    async logStatusSemantico(log: IObjectLog, entrada: boolean){
        if (entrada) {
            this.vetorDeLog.push(`entrando em: ${log.analise} virificando: ${this.object.tokens[this.object.atual].token} original: ${this.object.tokens[this.object.atual].textoOriginal}`);
        }
        else{
            this.vetorDeLog.push(`saindo de: ${log.analise} virificando: ${this.object.tokens[this.object.atual].token} original: ${this.object.tokens[this.object.atual].textoOriginal}`);
        }  
    }

    printVetorLog(): any{
        return this.vetorDeLog;
    }

    resetVetorLog(){
        this.vetorDeLog = [null];
    }

    assembleTree(){

    }
}