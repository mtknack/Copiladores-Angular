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

    async processar(){

        try {
            await this.objectService.logStatusSemantico(this.message(), true)

            await this.objectService.getVetorTokensAtual(PalavrasReservadas.IMPORT)
            await this.objectService.skipIndex()
            await this.identifier.processar()
            await this.objectService.skipIndex()
            await this.objectService.getVetorTokensAtual(PalavrasReservadas.SEMICOLON)       
            await this.objectService.skipIndex()
                
            await this.objectService.logStatusSemantico(this.message(), false)
        } catch (error) {
            throw error
        }
    }

}

//PROCESSANDO
//regra -> IMPORT <IDENTIFIER> ; | IMPORT <TYPEMODIFIER> ;
// VERDADEIRO FALSO
