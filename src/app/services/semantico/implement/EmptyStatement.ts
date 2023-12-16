import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { UnaryExpression } from "./UnaryExpression";
import { MultiplicativeExpression } from "./MultiplicativeExpression";


@Injectable({
    providedIn: 'root',
})
export class EmptyStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra1])
	}

}