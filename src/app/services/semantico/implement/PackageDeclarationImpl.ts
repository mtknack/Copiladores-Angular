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

        debugger
        this.objectService.logStatusSemantico(this.message(), true)

        let atualInicio = this.objectService.getIndex();
        let palavra1 = true;
        let palavra2 = true;
        let palavra3 = true;

        //REGRA 1
        palavra1 = this.objectService.validaPalavraReservada(PalavrasReservadas.PACKAGE)
        this.objectService.skipIndex()
        
        palavra2 = this.identifier.processar()
        this.objectService.skipIndex()

        palavra3 = this.objectService.validaPalavraReservada(PalavrasReservadas.SEMICOLON)
        this.objectService.skipIndex()

        if(palavra1 && palavra2 && palavra3)


        this.objectService.logStatusSemantico(this.message(), false)
    }

}