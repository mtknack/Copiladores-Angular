import { Injectable } from "@angular/core";
import { IIdentifier } from "../interfaces/IIdentifier";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Tipo } from "../../ITabela";


@Injectable({
    providedIn: 'root',
})
export class IdentifierImpl implements ILog {

    constructor(
        private objectService: ObjectService
    ){}

    message(): IObjectLog {
        return {
            analise: "Identifier",
            status: true
        }
    }

    async processar(){

        try {
            await this.objectService.logStatusSemantico(this.message(), true)

            await this.objectService.getVetorTokensAtualVerifique(Tipo.IDENTIFICADOR_VALIDO)

            await this.objectService.logStatusSemantico(this.message(), false)
        } catch (error) {
            // Trate o erro aqui, se necessário
            console.error(error);
        }
        
    }
}