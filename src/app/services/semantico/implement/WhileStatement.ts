import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { TryStatement } from "./TryStatement";
import { ClassInstanceCreationExpression } from "./ClassInstanceCreationExpression";
import { ObjectService } from "../Objetcs/ObjectService";
import { PalavrasReservadas } from "../../Reservadas";
import { Expression } from "./Expression";
import { Statement } from "./Statement";


@Injectable({
    providedIn: 'root',
})
export class WhileStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector
    ){
    }

    message(): IObjectLog {
        return {
            analise: "WhileStatement",
            status: true
        }
    }


    processar(){
        var regra1 = [PalavrasReservadas.WHILE, PalavrasReservadas.LEFT_PARENTHESIS, 
            this.injector.get(Expression), PalavrasReservadas.RIGHT_PARENTHESIS, 
            this.injector.get(Statement)]

        this.objectService.validaRegra(regra1)
	}

}