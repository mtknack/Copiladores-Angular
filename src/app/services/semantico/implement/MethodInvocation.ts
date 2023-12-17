import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";

import { Identifier } from "./Identifier";
import { ArgumentList } from "./ArgumentList";


@Injectable({
    providedIn: 'root',
})
export class MethodInvocation implements ILog {

    constructor(
        private objectService: ObjectService,
        private identifier: Identifier,
        private argumentList: ArgumentList
    ){

    }

    message(): IObjectLog {
        return {
            analise: "MethodInvocation",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

		let regra1 = [PalavrasReservadas.LEFT_PARENTHESIS, this.argumentList, PalavrasReservadas.RIGHT_PARENTHESIS]
		// let regra2 = [PalavrasReservadas.SUPER, PalavrasReservadas.PERIOD, this.identifier, PalavrasReservadas.LEFT_PARENTHESIS, this.argumentList, PalavrasReservadas.RIGHT_BRACE]
		
        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.LEFT_PARENTHESIS)){
            this.objectService.validaRegras([regra1])
        }
        // else if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.SUPER)){
        //     this.objectService.validaRegras([regra2])
        // }

        this.objectService.logClas(this.message(), false);
	}

}