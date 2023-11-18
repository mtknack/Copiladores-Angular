import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { ClassBody } from "./ClassBody";
import { Identifier } from "./Identifier";
import { ClassModifier } from "./ClassModifier";

@Injectable({
    providedIn: 'root',
})
export class ClassDeclaration implements ILog {
    
    constructor(
        private objectService: ObjectService,
        private classModifier: ClassModifier,
        private identifier: Identifier,
        // private classBody: ClassBody
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
        // if(this.classModifier.processar()){
        //     this.objectService.skipIndex()
        // }
        // if(this.objectService.validaPalavraReservada(PalavrasReservadas.CLASS)){
        //     // se this.identifier.processar() e false ja retorna false para a classe pai
        //     if(!this.identifier.processar()){
        //         this.objectService.logStatusSemantico(this.message(), false)
        //         return flag;
        //     }
        //     this.objectService.skipIndex()
        //     // se this.classBody.processar() e false ja retorna false para a classe pai
        //     if(!this.classBody.processar()){
        //         this.objectService.logStatusSemantico(this.message(), false)
        //         return flag;
        //     }
        //     flag = true;
        // }
        this.objectService.logStatusSemantico(this.message(), false)
        return flag;


        




    }

}