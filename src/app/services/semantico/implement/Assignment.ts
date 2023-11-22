import { Injectable } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { AssignmentOperator } from "./AssignmentOperator";
import { Expression } from "./Expression";


@Injectable({
    providedIn: 'root',
})
export class Assignment implements ILog {

    constructor(
        private objectService: ObjectService,
        private assignmentOperator: AssignmentOperator,
        private expression: Expression
    ){
    }

    message(): IObjectLog {
        return {
            analise: "Assignment",
            status: true
        }
    }


    processar(){

        var regra1 = this.assignmentOperator
        var regra2 = this.expression
        
        this.objectService.validaRegra([regra1, regra2])
	}

}