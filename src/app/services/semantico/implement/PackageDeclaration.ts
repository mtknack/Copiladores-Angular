import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { Identifier } from "./Identifier";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class PackageDeclaration implements ILog {

    constructor(
        private identifier: Identifier,
        private objectService: ObjectService,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Package Declaration",
            status: true
        }
    }


    processar() {
        // this.objectService.logStatusSemantico(this.message(), true);

        try {
            // this.objectService.getVetorTokensAtual(PalavrasReservadas.PACKAGE);
            this.objectService.validaRegra([PalavrasReservadas.PACKAGE, this.identifier, PalavrasReservadas.SEMICOLON],[]);

            // this.objectService.getVetorTokensAtual(PalavrasReservadas.SEMICOLON);
        } catch (error) {
            console.error(error);
            throw error
        }
        // this.objectService.logStatusSemantico(this.message(), false);
    }
}