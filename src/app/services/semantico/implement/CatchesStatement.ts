import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { PalavrasReservadas } from "../../Reservadas";
import { Block } from "./Block";
import { CatchClause } from "./CatchClause";
import { Finally } from "./Finally";


@Injectable({
    providedIn: 'root',
})
export class CatchesStatement implements ILog {

	constructor(
		private objectService: ObjectService,
		private finally_: Finally,
		private catchClause: CatchClause 
	){
	}

    message(): IObjectLog {
        return {
            analise: "CatchesStatement",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

        var regra1 = [this.catchClause]
        var regra2 =  [this.finally_]

        this.objectService.validaRegras([regra1])
        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.FINALLY)){
            this.objectService.validaRegras([regra2])
        }

        this.objectService.logClas(this.message(), false);

	}

}