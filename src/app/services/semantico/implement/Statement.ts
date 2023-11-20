import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { MethodDeclarator } from "./methodDeclarator";
import { LocalVariableDeclaration } from "./LocalVariableDeclaration";
import { Block } from "./Block";
import { Identifier } from "./Identifier";
import { EmptyStatement } from "./EmptyStatement";
import { MethodInvocation } from "./MethodInvocation";


@Injectable({
    providedIn: 'root',
})
export class StatementExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private assignment:Assignment,
        private methodInvocation:MethodInvocation,
        private labeledStatement:LabeledStatement
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [this.assignment]
        let regra2 = [this.methodInvocation]
        let regra3 = [this.labeledStatement]
        // let regra2 = [this, this.blockStatement]
        
        this.objectService.validaRegra(regra1)
	}

}