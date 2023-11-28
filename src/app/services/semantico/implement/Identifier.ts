import { Injectable, Injector } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Tipo } from "../../Interfaces";
import { toArray } from "rxjs";
import { ImportDeclaration } from "./ImportDeclaration";


@Injectable({
    providedIn: 'root',
})
export class Identifier implements ILog {

    constructor(
        private objectService: ObjectService,
    ){
        
    }

    message(): IObjectLog {
        return {
            analise: "Identifier",
            status: true
        }
    }

    processar(){

        this.objectService.logClas(this.message(), true);

        try {
            // this.objectService.logStatusSemantico(this.message(), true)
            this.objectService.validaRegras([[Tipo.IDENTIFICADOR_VALIDO]])
            // this.objectService.logStatusSemantico(this.message(), false)
        } catch (error) {
            // Trate o erro aqui, se necessário
            throw error
        }
        
        this.objectService.logClas(this.message(), false);
 
    }

    

}