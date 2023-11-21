import { Injectable } from "@angular/core";
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
        private expression:Expression,
        // private argumentList:ArgumentList
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [this.expression]
		// let regra2 = [this.argumentList, PalavrasReservadas.COMMA, this.expression]
		
        // try{
            this.objectService.validaRegra(regra1)
        // }
        // catch{
        //     this.objectService.validaRegra(regra2)            
        // }
	}

}