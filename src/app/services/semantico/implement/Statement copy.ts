import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { MethodDeclarator } from "./methodDeclarator";
import { LocalVariableDeclaration } from "./LocalVariableDeclaration";
import { Block } from "./Block";
import { Identifier } from "./Identifier";


@Injectable({
    providedIn: 'root',
})
export class Statement implements ILog {

    constructor(
        private objectService: ObjectService,
        private block:Block,
        private emptyStatement:EmptyStatement,
        private identifier:Identifier,
        private statementExpression:StatementExpression,
        private doStatement:DoStatement,
        private breakStatement:BreakStatement,
        private continueStatement:ContinueStatement,
        private returnStatement:ReturnStatement,
        private ifStatement:IfStatement,
        private whileStatement:WhileStatement,
        private tryStatement:TryStatement,
        private classInstanceCreationExpression:ClassInstanceCreationExpression
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [this.block]
        let regra2 = [this.emptyStatement]
        let regra3 = [this.identifier,this.statementExpression,PalavrasReservadas.SEMICOLON]
        let regra4 = [this.doStatement]
        let regra5 = [this.breakStatement]
        let regra6 = [this.continueStatement]
        let regra7 = [this.returnStatement]
        let regra8 = [this.ifStatement]
        let regra9 = [this.whileStatement]
        let regra10 = [this.tryStatement]
        let regra11 = [this.classInstanceCreationExpression]
        // let regra2 = [this, this.blockStatement]
        this.objectService.validaRegra(regra1)
	}

}