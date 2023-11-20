import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { VariableDeclarators } from "./VariableDeclarators";


@Injectable({
    providedIn: 'root',
})
export class FieldDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
        private variableDeclarators:VariableDeclarators
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [this.variableDeclarators, PalavrasReservadas.SEMICOLON]
		this.objectService.validaRegra(regra1)
	}

}