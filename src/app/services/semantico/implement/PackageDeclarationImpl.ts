import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { IdentifierImpl } from "./IdentifierImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class PackageDeclarationImpl implements ILog {

    constructor(
        private identifier: IdentifierImpl,
        private objectService: ObjectService,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Package Declaration",
            status: true
        }
    }

    // <importDeclaration> → import <identifier> ; | define <modifier> ;
    processar(){

        // this.objectService.logStatusSemantico(this.message(), true)

        // let atualInicio = this.objectService.getIndex();
        let [regra1,tokenEsperado] = this.objectService.validaRegra([PalavrasReservadas.PACKAGE, this.identifier, PalavrasReservadas.SEMICOLON])
        let [regra2,teste] = this.objectService.validaRegra([PalavrasReservadas.PACKAGE, PalavrasReservadas.SEMICOLON])
        

        console.log(regra1)
        console.log(regra2)
        if(regra1 || regra2){
            return true
        }
        this.objectService.criaErro(tokenEsperado)
        console.log(this.objectService.object.tokens[this.objectService.object.atual].erro)
        return false


        // this.objectService.logStatusSemantico(this.message(), false)
        // return true
    }

}