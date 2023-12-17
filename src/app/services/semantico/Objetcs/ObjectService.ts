import { ElementRef, Injectable } from "@angular/core";
import { IObjectInfo } from "./IObjectInfo";
import { Arvore } from "./Arvore";
import { IToken, Tipo } from "../../Interfaces";
import { ILog, IObjectLog } from "./Log";
import { } from "../../Interfaces"
import { PalavrasReservadas } from "../../Reservadas";

type expected = {
    vetor:any,
    linha:any,
    coluna:any
}
@Injectable({
    providedIn: 'root', // Este serviço será injetado em toda a aplicação
})
export class ObjectService {

    object!: IObjectInfo
    expecteds: expected[] = []
    vetorError: [String | null] = [null]
    loop: Number = -1

    constructor() { }

    private skipIndex() {
        if (this.object.atual < this.object.tokens.length) {
            this.object.atual++
        }

        // if (this.object.atual < this.object.tokens.length-1) {
        //     this.object.atual++
        // }
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

    getObjectAtualToken(): string {
        if(this.object.atual >= this.object.tokens.length){
            return 'VAZIO'
        }
        else{
            return this.object.tokens[this.object.atual].token
        }
    }

    getObjectAtualTokenObject(): IToken {
        let num = 0 
        this.object.atual-1 <= 0 ? num = 0 : num = this.object.atual-1
        if(this.object.atual >= this.object.tokens.length){
            return {
                textoOriginal:"", 
                tipo:Tipo.IDENTIFICADOR_INVALIDO,token:"",
                linha:num,
                coluna:(num + 1)
            }
        }
        else{
            return this.object.tokens[this.object.atual]
        }
    }

    public validaRegraOpcional(arrayDeToken: any[], optionalTokens: number[]) {

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
    }

    public validaRegras(arrayDeRegras:any[]){
        let indexAtual = this.getIndex();
        let qtdRegrasQueRodou = 0;
        for (let index = 0; index < arrayDeRegras.length; index++) {
            const regra = arrayDeRegras[index];
            try{
                this.validaRegra(regra)//index = 2
                //[BYTE],[SHORT identificador],[int],[float]
                qtdRegrasQueRodou = index
                break
            }catch(erro){
                if(index == arrayDeRegras.length-1){
                    throw(erro)
                }
            }finally{
                for (let j = 0; j < qtdRegrasQueRodou; j++) {
                    this.expecteds.pop();
                }
            }
        }
    }
    

    private validaRegra(arrayDeToken: any[]) {
        let primeiroIndex = this.getIndex();

        let tentarDenovo = false;
        let newArrayDeToken: any[]
        let newOptionalTokens: number[]
        try {
            arrayDeToken.map((tipoToken, index) => {                
                if (typeof tipoToken === typeof '') {
                    // console.log(tipoToken)
                    // if(arrayDeTokenOr != undefined){
                    //     arrayDeTokenOr.map(palavra => {
                    //         if(this.validaPalavraReservadaSemPular(palavra)){
                    //             this.validaPalavraReservada(palavra)
                    //             // ver um jeito de parar o map
                    //             return
                    //         }
                    //     })
                    // }
                    // else{
                        this.validaPalavraReservada(tipoToken);
                    // }
                    
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

    public validaPalavrasReservadas(classe:any){
        for (let i = 0; i < classe.palavras.length; i++) {
            let palavra = classe.palavras[i]
            if (typeof palavra === typeof '') {
                if(this.validaPalavraReservadaSemPular(palavra)){
                    return true
                }
            }
            else if (typeof palavra === typeof 1) {
                if(this.validaTipoTokenAtualSemPular(palavra)){
                    return true
                }
            }
        }
        return false
    }

    public validaPalavrasReservadas2(classe:any){
        for (let i = 0; i < classe.palavras.length; i++) {
            let palavra = classe.palavras[i][0]
            if (typeof palavra === typeof '') {
                if(this.validaPalavraReservadaSemPular(palavra)){
                    return true
                }
            }
            else if (typeof palavra === typeof 1) {
                if(this.validaTipoTokenAtualSemPular(palavra)){
                    return true
                }
            }
        }
        return false
    }

    public validaPalavraReservada(regra: string) {
        let tokenDoErro = this.getObjectAtualTokenObject()
        if (tokenDoErro.token != regra) {
            // this.vetorDeLog.push(`Esperando "${regra}" na linha ${tokenDoErro.linha}`)
            this.expecteds.push({coluna:tokenDoErro.coluna,linha:tokenDoErro.linha, vetor:regra})
            throw new Error(`Esperando "${regra}" na linha ${tokenDoErro.linha}`)
        }
        this.skipIndex()
    }
    
    public validaPalavraReservadaSemPular(regra: string) {
        let token = this.getObjectAtualTokenObject().token
        if (token == regra) {
            return true
        }
        return false
    }

    // public validaPalavraReservadaSemPularVetor(regra: any[]) {
    //     let token = this.getObjectAtualTokenObject().token
    //     if (regra.includes(token)) {
    //         return true
    //         console.log(token, 'sssssssssssssssssssssssssssssssssssssssssssssssssssssss')
    //     }
    //     return false
    // }

    public validaTipoTokenAtual(tipo: Number) {
        let tokenDoErro = this.getObjectAtualTokenObject()

        if (this.getObjectAtualTokenObject().tipo != tipo) {
            this.expecteds.push({coluna:tokenDoErro.coluna,linha:tokenDoErro.linha, vetor:"identificador_valido"})            
            throw new Error(`Esperado um identificador valido na linha ${tokenDoErro.linha}`)
        }
        this.skipIndex()
    }

    public validaTipoTokenAtualSemPular(tipo: Number) {
        let tokenDoErro = this.getObjectAtualTokenObject()
        if (tokenDoErro.tipo == tipo) {
            return true
        }
        return false
    }

    newObject(tokens: IToken[]) {
        var x = {
            tokens: tokens,
            atual: 0,
            arvore: this.newArvore()
        }

        this.setObject(x)
    }

    logClas(classe: IObjectLog, entrada: boolean){
        if(entrada){
            console.log(`Entrando na classe ${classe.analise} - ${this.getObjectAtualToken()}`)
        }else{
            console.log(`Saindo da classe ${classe.analise} - ${this.getObjectAtualToken()}`)
        }
    }

    static getInstance(){
        return this
    }

    newArvore(): Arvore {
        return {
            vetor: []
        }
    }

}