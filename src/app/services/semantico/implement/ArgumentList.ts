import { Injectable, Injector } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";

import { Identifier } from "./Identifier";
import { Expression } from "./Expression";


@Injectable({
    providedIn: 'root',
})
export class ArgumentList implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector
        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ArgumentList",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);

		let regra1 = [this.injector.get(Expression)]
		let regra2 = [PalavrasReservadas.COMMA, this]
		
        this.objectService.validaRegras([regra1])     
        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.COMMA)){
            this.objectService.validaRegras([regra2])     
        }

        this.objectService.logClas(this.message(), false);
	}

}