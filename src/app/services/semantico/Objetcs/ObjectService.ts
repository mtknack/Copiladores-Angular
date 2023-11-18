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
    vetorDeLog: [any] = [null]

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

    public validaRegra(arrayDeToken:any[],optionalTokens:number[]){
        //([IMPORT, IDENTIFICADOR, SEMICOLON],[0,1,2])
        
        let primeiroIndex = this.getIndex();
        let indexErro;
        try{
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
                    //     continue
                    // }
                    indexErro = this.object.atual;
                    throw error;
                }
            });
        }catch(erro){
            this.setIndex(primeiroIndex);
            throw erro
        }
    }

    private validaPalavraReservada(regra: string){
        if(this.object.tokens[this.object.atual].token != regra){
            throw new Error(`Error de verificação em validar: ${this.object.tokens[this.object.atual].token} == ${regra} `)
        }
    }

    private validaTipoTokenAtual(tipo: Number){
        if(this.object.tokens[this.object.atual].tipo != tipo){
            throw new Error(`Error de verificação de tipo em validar tipo: ${this.object.tokens[this.object.atual].tipo} === ${tipo} `)
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

//PROGRAM -> PACKAGE IMPORT CLASS