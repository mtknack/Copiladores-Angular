import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { MethodDeclarator } from "./methodDeclarator";
import { BlockStatement } from "./BlockStatement";


@Injectable({
    providedIn: 'root',
})
export class BlockStatements implements ILog {

    constructor(
        private objectService: ObjectService,
        private blockStatement : BlockStatement,
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [this.blockStatement]
        // let regra2 = [this, this.blockStatement]
        this.objectService.validaRegra(regra1)
	}

}