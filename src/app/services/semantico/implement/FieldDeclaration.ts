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
            analise: "FieldDeclaration",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);
        
		let regra1 = [this.variableDeclarators, PalavrasReservadas.SEMICOLON]
		this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}