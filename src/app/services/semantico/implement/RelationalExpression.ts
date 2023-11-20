import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { OperationalExpression } from "./OperationalExpression";


@Injectable({
    providedIn: 'root',
})
export class RelationalExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private operationalExpression:OperationalExpression,
        // private relationalExpression:RelationalExpression,       
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.EQUALS,this.operationalExpression, this]
		let regra2 = [PalavrasReservadas.NOT_EQUALS,this.operationalExpression, this]
		let regra3 = [PalavrasReservadas.LESS_THAN,this.operationalExpression, this]
		let regra4 = [PalavrasReservadas.LESS_THAN_OR_EQUALS,this.operationalExpression, this]
		let regra5 = [PalavrasReservadas.GREATER_THAN,this.operationalExpression, this]
		let regra6 = [PalavrasReservadas.GREATER_THAN_OR_EQUALS,this.operationalExpression, this]
		let regra7 = []
        this.objectService.validaRegra(regra1)
	}

}