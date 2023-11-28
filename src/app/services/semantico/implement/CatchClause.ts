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
        this.objectService.logClas(this.message(), true);
        
        //falta formal parameter
        var regra1 = [PalavrasReservadas.CATCH, PalavrasReservadas.LEFT_PARENTHESIS, 
             PalavrasReservadas.RIGHT_PARENTHESIS,
            this.injector.get(Block)]

        this.objectService.validaRegra(regra1)
        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.CATCH)){
            this.processar();
        }

        this.objectService.logClas(this.message(), false);
	}

}