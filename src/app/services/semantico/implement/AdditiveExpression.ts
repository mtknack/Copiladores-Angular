import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Term } from "./Term";


@Injectable({
    providedIn: 'root',
})
export class AdditiveExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private term:Term,
        // private additiveExpression:AdditiveExpression
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.ADD,this.term,this]
		let regra2 = [PalavrasReservadas.SUBTRACT,this.term,this]
		let regra3 = []
        this.objectService.validaRegra(regra1)
	}

}