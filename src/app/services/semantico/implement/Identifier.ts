import { Injectable } from "@angular/core";
import { IIdentifier } from "../interfaces/IIdentifier";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Tipo } from "../../Interfaces";
import { toArray } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class Identifier implements ILog {

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

        try {
            // this.objectService.logStatusSemantico(this.message(), true)
            this.objectService.validaRegra([Tipo.IDENTIFICADOR_VALIDO])
            // this.objectService.logStatusSemantico(this.message(), false)
        } catch (error) {
            // Trate o erro aqui, se necessário
            throw error
        }
        

 
    }

    

}