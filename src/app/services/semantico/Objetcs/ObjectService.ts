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

    getObject(): IObjectInfo{
        return this.object
    }

    setObject(object: IObjectInfo ){
        this.object = object
    }

    getVetorTokensAtual(regra: string){
        if(this.object.tokens[this.object.atual].token == regra){
            
        }
        else{
            throw new Error(`Error de verificação em validar: ${this.object.tokens[this.object.atual].token} == ${regra} `)
        }
    }

    getVetorTokensAtualVerifique(tipo: Number){
        if(this.object.tokens[this.object.atual].tipo == tipo){
            return true
        }
        else{
            throw new Error(`Error de verificação de tipo em validar tipo: ${this.object.tokens[this.object.atual].token} === ${tipo} `)
        }
    }

    newObject(tokens: [ITabela]){
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