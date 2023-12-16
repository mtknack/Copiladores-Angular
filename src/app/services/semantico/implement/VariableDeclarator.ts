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
            analise: "VariableDeclarator",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);

		let regra1 = [this.expression]
        this.objectService.validaRegras([regra1])
        
        this.objectService.logClas(this.message(), false);
	}

}