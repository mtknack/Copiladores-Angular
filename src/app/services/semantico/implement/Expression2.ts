import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ComparationExpression } from "./ComparationExpression";


@Injectable({
    providedIn: 'root',
})
export class Expression2 implements ILog {

    constructor(
        private objectService: ObjectService,
        private comparationExpression:ComparationExpression,
        // private expression2:Expression2,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.LOGICAL_OR,this.comparationExpression, this]
		let regra2 = [PalavrasReservadas.LOGICAL_AND,this.comparationExpression, this]
		let regra3 = []
        this.objectService.validaRegra(regra1)
	}

}