import { Injectable, Inject, forwardRef, Injector } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Block } from "./Block";
import { Identifier } from "./Identifier";
import { EmptyStatement } from "./EmptyStatement";
import { StatementExpression } from "./StatementExpression";
import { DoStatement } from "./DoStatement";
import { BreakStatement } from "./BreakStatement";
import { ContinueStatement } from "./ContinueStatement";
import { ReturnStatement } from "./ReturnStatement";
import { IfStatement } from "./IfStatement";
import { WhileStatement } from "./WhileStatement";
import { TryStatement } from "./TryStatement";
import { ClassInstanceCreationExpression } from "./ClassInstanceCreationExpression";

@Injectable({
    providedIn: 'root',
})
export class Statement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector,
        private emptyStatement: EmptyStatement,
        private identifier: Identifier,
        private statementExpression: StatementExpression,
        private doStatement: DoStatement,
        private breakStatement: BreakStatement,
        private continueStatement:ContinueStatement,
        private returnStatement: ReturnStatement,
        private ifStatement: IfStatement,
        private whileStatement: WhileStatement,
        private tryStatement: TryStatement,
        private classInstanceCreationExpression: ClassInstanceCreationExpression
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [this.injector.get(Block)]
        let regra2 = [PalavrasReservadas.SEMICOLON]
        let regra3 = [this.identifier, this.statementExpression, PalavrasReservadas.SEMICOLON]
        let regra4 = [this.doStatement]
        let regra5 = [this.breakStatement]
        let regra6 = [this.continueStatement]
        let regra7 = [this.returnStatement]
        let regra8 = [this.ifStatement]
        let regra9 = [this.whileStatement]
        let regra10 = [this.tryStatement]
        let regra11 = [this.classInstanceCreationExpression]
        let regras = [regra1,regra2,regra3]
        debugger
        this.objectService.validaRegras(regras)
	}

}