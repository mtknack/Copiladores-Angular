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


    processar(){
        debugger
        this.objectService.logStatusSemantico(this.message(), true)

        this.objectService.getVetorTokensAtual(PalavrasReservadas.PACKAGE)
        this.objectService.skipIndex()
        this.identifier.processar()
        this.objectService.skipIndex()
        this.objectService.getVetorTokensAtual(PalavrasReservadas.SEMICOLON)
        this.objectService.skipIndex()

        this.objectService.logStatusSemantico(this.message(), false)
    }

}