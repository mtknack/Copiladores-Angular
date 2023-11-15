import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { ClassBody } from "./ClassBody";
import { IdentifierImpl } from "./IdentifierImpl";
import { ClassModifier } from "./ClassModifier";

@Injectable({
    providedIn: 'root',
})
export class ClassDeclaration implements ILog {
    
    constructor(
        private objectService: ObjectService,
        private classModifier: ClassModifier,
        private identifier: IdentifierImpl,
        private classBody: ClassBody
    ){}

    message(): IObjectLog {
        return {
            analise: "Class Declaration",
            status: true
        }
    }

// REGRA: <classDeclaration> → <classModifier>? class <identifier> <classBody>
    processar(): any{

        //TENTANDO CRIAR FUNCAO PARA VALIDAR UMA REGRA INTEIRA
        // let regra1 = [this.classModifier, PalavrasReservadas.CLASS, this.identifier, this.classBody]
        // if(this.validaRegra(regra1)){
            // return true
        // }





        var flag: boolean = false;
        this.objectService.logStatusSemantico(this.message(), true)
        // Se for um classModifier tem que pular para a proxima palavra
        if(this.classModifier.processar()){
            this.objectService.skipIndex()
        }
        if(this.objectService.validaPalavraReservada(PalavrasReservadas.CLASS)){
            // se this.identifier.processar() e false ja retorna false para a classe pai
            if(!this.identifier.processar()){
                this.objectService.logStatusSemantico(this.message(), false)
                return flag;
            }
            this.objectService.skipIndex()
            // se this.classBody.processar() e false ja retorna false para a classe pai
            if(!this.classBody.processar()){
                this.objectService.logStatusSemantico(this.message(), false)
                return flag;
            }
            flag = true;
        }
        this.objectService.logStatusSemantico(this.message(), false)
        return flag;


        




    }

    validaRegra(arrayDeToken:any[]):boolean{
        let qtdPalavra = arrayDeToken.length;
        let arrayVerdade = []
        let verdadeFinal = true
        let primeiroIndex = this.objectService.getIndex();
        for (let i = 0; i < qtdPalavra; i++) {
            let teste = false;

            if(typeof arrayDeToken[i] == typeof ``){
                teste = this.objectService.validaPalavraReservada(arrayDeToken[i]);
            }else if(typeof arrayDeToken[i] == typeof 10){
                teste = this.objectService.validaTipoTokenAtual(arrayDeToken[i]);
            }
            else{
                teste = arrayDeToken[i].processar();
            }

            arrayVerdade.push(teste);
            if(arrayVerdade[i] == false){
                verdadeFinal = false
                break
            }
            this.objectService.skipIndex();
        }
        if (verdadeFinal == false) {
            this.objectService.setIndex(primeiroIndex);
            return false
        }
        return true
        
    }
}