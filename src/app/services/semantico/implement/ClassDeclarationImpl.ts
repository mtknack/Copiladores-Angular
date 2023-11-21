import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { IdentifierImpl } from "./IdentifierImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";

@Injectable({
    providedIn: 'root',
})
export class ClassDeclarationImpl implements ILog {

    constructor(
        private objectService: ObjectService,
        private identifier: IdentifierImpl
    ) {

    }

    message(): IObjectLog {
        return {
            analise: "classDeclaration",
            status: true
        }
    }

    async processar() {

        try {
            await this.objectService.logStatusSemantico(this.message(), true)

            await this.objectService.getVetorTokensAtual(PalavrasReservadas.PUBLIC)
            await this.objectService.skipIndex()
            await this.objectService.getVetorTokensAtual(PalavrasReservadas.CLASS)

            await this.objectService.logStatusSemantico(this.message(), false)
        } catch (error) {
            throw error
        }

    }

}
