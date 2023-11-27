import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { Statement } from "./Statement";
import { Expression } from "./Expression";


@Injectable({
    providedIn: 'root',
})
export class DoStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector,
        // private statement: Statement,
        private expression: Expression
    ){
    }

    message(): IObjectLog {
        return {
            analise: "DoStatement",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.DO, this.injector.get(Statement), 
            PalavrasReservadas.WHILE, PalavrasReservadas.LEFT_PARENTHESIS, 
            this.expression, PalavrasReservadas.RIGHT_PARENTHESIS, 
            PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra1])
	}

}