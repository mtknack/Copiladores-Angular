import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Expression } from "./Expression";


@Injectable({
    providedIn: 'root',
})
export class VariableDeclarator implements ILog {

    constructor(
        private objectService: ObjectService,
        private expression:Expression,
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
        this.objectService.validaRegra(regra1)
        
	}

}