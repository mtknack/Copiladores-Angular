import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { Expression } from "./Expression";
import { Statement } from "./Statement";
import { IfThenElseStatement } from "./IfThenElseStatement";
import { PalavrasReservadas } from "../../Reservadas";


@Injectable({
    providedIn: 'root',
})
export class IfStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector,
        private expression: Expression,
        // private statement: Statement,
        private ifThenElseStatement: IfThenElseStatement
    ){
    }

    message(): IObjectLog {
        return {
            analise: "IfStatement",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);
        // ver o caso de se contiver ou não o ifThenElseStatement
        var regra1 = [
            PalavrasReservadas.IF, PalavrasReservadas.LEFT_PARENTHESIS, 
             PalavrasReservadas.RIGHT_PARENTHESIS, 
            this.injector.get(Statement), this.ifThenElseStatement]

        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}