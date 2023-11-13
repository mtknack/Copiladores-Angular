import { Injectable } from "@angular/core";
import { IObjectInfo } from "./IObjectInfo";
import { Arvore } from "./Arvore";
import { ITabela } from "../../ITabela";

@Injectable({
    providedIn: 'root', // Este serviço será injetado em toda a aplicação
})
export class ObjectService {

    object!: IObjectInfo
    
    constructor(){}

    skipIndex(){
        this.object.atual++
    }

    backIndex(){
        this.object.atual--
    }

    getObject(): IObjectInfo{
        return this.object
    }

    setObject(object: IObjectInfo ){
        this.object = object
    }

    getVetorTokensAtual(regra: string): boolean {
        console.log(this.object.tokens[this.object.atual].token, regra)
        if(this.object.tokens[this.object.atual].token == regra){
            console.log('1')
            return true
        }
        return false
    }

    getVetorTokensAtualverifiqueType(type: any){
        if(typeof this.object.tokens[this.object.atual].token === typeof type){
            return true
        }
        return false
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

    assembleTree(){

    }
}