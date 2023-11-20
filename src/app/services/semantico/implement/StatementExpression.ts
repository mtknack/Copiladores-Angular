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
        private methodInvocation:MethodInvocation,
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
        let regra1 = [this.assignment]
        let regra2 = [this.methodInvocation]
        let regra3 = [this.labeledStatement]
        // let regra2 = [this, this.blockStatement]
        
        this.objectService.validaRegra(regra1)
	}

}