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
        return this.object.tokens[this.object.atual].token
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
        let erroTotal = ``
        let indexAtual = this.getIndex();
        for (let index = 0; index < arrayDeRegras.length; index++) {
            const regra = arrayDeRegras[index];
            try{
                this.validaRegra(regra)//index = 2
                for (let j = 0; j < index; j++) {
                    this.expecteds.pop();
                }
                break
            }catch(erro){
                // erroTotal += erro
                if(index == arrayDeRegras.length-1){
                    throw(erro)
                }
            }
        }
    }
    

    public validaRegra(arrayDeToken: any[]) {
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
        let tokenDoErro = this.object.tokens[this.object.atual]
        if (this.object.tokens[this.object.atual].token != regra) {
            // this.vetorDeLog.push(`Esperando "${regra}" na linha ${tokenDoErro.linha}`)
            this.expecteds.push({coluna:tokenDoErro.coluna,linha:tokenDoErro.linha, vetor:regra})
            throw new Error(`Esperando "${regra}" na linha ${tokenDoErro.linha}`)
        }
        this.skipIndex()
    }
    
    public validaPalavraReservadaSemPular(regra: string) {
        let token = this.object.tokens[this.object.atual].token
        if (token == regra) {
            return true
        }
        return false
    }

    public validaTipoTokenAtual(tipo: Number) {
        let tokenDoErro = this.object.tokens[this.object.atual]
        if (this.object.tokens[this.object.atual].tipo != tipo) {
            this.expecteds.push({coluna:tokenDoErro.coluna,linha:tokenDoErro.linha, vetor:"identificador_valido"})            
            // this.vetorDeLog.push(`Esperado um identificador valido na linha ${tokenDoErro.linha}`)
            throw new Error(`Esperado um identificador valido na linha ${tokenDoErro.linha}`)
        }
        this.skipIndex()
    }

    public validaTipoTokenAtualSemPular(tipo: Number) {
        let tokenDoErro = this.object.tokens[this.object.atual]
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
            console.log(`Entrando na classe ${classe.analise}`)
        }else{
            console.log(`Saindo da classe ${classe.analise}`)
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