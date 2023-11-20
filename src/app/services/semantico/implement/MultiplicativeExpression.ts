import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { UnaryExpression } from "./UnaryExpression";


@Injectable({
    providedIn: 'root',
})
export class MultiplicativeExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private unaryExpression:UnaryExpression,

        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.MULTIPLY,this.unaryExpression, this]
		let regra2 = [PalavrasReservadas.DIVIDE,this.unaryExpression, this]
		let regra3 = [PalavrasReservadas.MODULO,this.unaryExpression, this]
		let regra4 = []//epslon
        this.objectService.validaRegra(regra1)
	}

}