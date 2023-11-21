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


    async processar() {
        await this.objectService.logStatusSemantico(this.message(), true);

        try {
            await this.objectService.getVetorTokensAtual(PalavrasReservadas.PACKAGE);
            await this.objectService.skipIndex();
            
            await this.identifier.processar();
            await this.objectService.skipIndex();
            
            await this.objectService.getVetorTokensAtual(PalavrasReservadas.SEMICOLON);
            // await this.objectService.skipIndex();
        } catch (error) {
            throw error
        }
        await this.objectService.logStatusSemantico(this.message(), false);
    }
}