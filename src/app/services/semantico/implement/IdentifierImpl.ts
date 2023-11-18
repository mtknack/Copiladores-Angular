import { Injectable } from "@angular/core";
import { IIdentifier } from "../interfaces/IIdentifier";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Tipo } from "../../Interfaces";


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

    processar(){
        let tdcerto = true

        this.objectService.logStatusSemantico(this.message(), true)

        return this.objectService.validaTipoTokenAtual(Tipo.IDENTIFICADOR_VALIDO)
        
        this.objectService.logStatusSemantico(this.message(), false)
        
 
    }

    

}