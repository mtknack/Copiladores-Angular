import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ImportsDeclarationImpl } from "./ImportsDeclarationImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Tipo } from "../../Interfaces";


@Injectable({
    providedIn: 'root',
})
export class ImportDeclarations implements ILog {

    constructor(
        private importsDeclarationImpl: ImportsDeclarationImpl,
        private objectService: ObjectService,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Import Declarations",
            status: true
        }
    }

    processar(){
        this.objectService.logStatusSemantico(this.message(), true)

        this.importsDeclarationImpl.processar() 
        this.objectService.validaPalavraReservada(PalavrasReservadas.IMPORT)
        this.processar()
        
        this.objectService.logStatusSemantico(this.message(), false)

        // let regra1 = [PalavrasReservadas.PACKAGE, Tipo.IDENTIFICADOR_VALIDO, PalavrasReservadas.SEMICOLON]
        // if(this.objectService.validaRegra(regra1))
        // else regra2
        return true
    }

}