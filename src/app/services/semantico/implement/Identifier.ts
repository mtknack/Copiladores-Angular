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
        let regra1 = [Tipo.IDENTIFICADOR_VALIDO]
        this.objectService.validaRegras([regra1])
        

        
        this.objectService.logClas(this.message(), false);
 
    }

    

}