import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { UnaryExpression } from "./UnaryExpression";
import { MultiplicativeExpression } from "./MultiplicativeExpression";


@Injectable({
    providedIn: 'root',
})
export class Term implements ILog {

    constructor(
        private objectService: ObjectService,
        private unaryExpression:UnaryExpression,
        // private multiplicativeExpression:MultiplicativeExpression
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		// let regra1 = [this.unaryExpression,this.multiplicativeExpression]
        // this.objectService.validaRegra(regra1)
	}

}