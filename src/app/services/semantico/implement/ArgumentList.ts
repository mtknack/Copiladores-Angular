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
		let regra2 = [this, PalavrasReservadas.COMMA, this.injector.get(Expression)]
		
        try{
            this.objectService.validaRegra(regra1)
        }
        catch{
            this.objectService.validaRegra(regra2)            
        }

        this.objectService.logClas(this.message(), false);
	}

}