import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { PalavrasReservadas } from "../../Reservadas";
import { Block } from "./Block";
import { FormalParameter } from "./FormalParameter";


@Injectable({
    providedIn: 'root',
})
export class CatchClause implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector,
        private formalParameter: FormalParameter
    ){
    }

    message(): IObjectLog {
        return {
            analise: "CatchClause",
            status: true
        }
    }


    processar(){
        var regra1 = [PalavrasReservadas.CATCH, PalavrasReservadas.LEFT_PARENTHESIS, 
            this.formalParameter, PalavrasReservadas.RIGHT_PARENTHESIS,
            this.injector.get(Block), this]

        this.objectService.validaRegra(regra1)
	}

}