import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { OperationalExpression } from "./OperationalExpression";
import { RelationalExpression } from "./RelationalExpression";


@Injectable({
    providedIn: 'root',
})
export class ComparationExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private operationalExpression:OperationalExpression,
        private relationalExpression:RelationalExpression,

        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [this.operationalExpression,this.relationalExpression]
        this.objectService.validaRegra(regra1)
	}

}