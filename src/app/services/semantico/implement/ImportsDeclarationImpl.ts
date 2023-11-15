import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { IdentifierImpl } from "./IdentifierImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class ImportsDeclarationImpl implements ILog{

    constructor(
        private identifier: IdentifierImpl,
        private objectService: ObjectService,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Import Declaration",
            status: true
        }
    }

    processar(){
        this.objectService.logStatusSemantico(this.message(), true)

        this.objectService.validaPalavraReservada(PalavrasReservadas.IMPORT)
        this.objectService.skipIndex()

        this.identifier.processar()
        this.objectService.skipIndex()
        
        this.objectService.validaPalavraReservada(PalavrasReservadas.SEMICOLON)
        this.objectService.skipIndex()
            
        this.objectService.logStatusSemantico(this.message(), false)
            
    }

}

//PROCESSANDO
//regra -> IMPORT <IDENTIFIER> ; | IMPORT <TYPEMODIFIER> ;
// VERDADEIRO FALSO
