import { Injectable } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { MethodInvocation } from "./MethodInvocation";
import { Assignment } from "./Assignment";
import { LabeledStatement } from "./LabeledStatement";


@Injectable({
    providedIn: 'root',
})
export class StatementExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private assignment: Assignment,
        private methodInvocation: MethodInvocation,
        private labeledStatement: LabeledStatement
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        var regra1 = [this.assignment]
        var regra2 = [this.methodInvocation]
        var regra3 = [this.labeledStatement]
        var regras = [regra1, regra2, regra3]
        
        this.objectService.validaRegras(regras)
	}

}