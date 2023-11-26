import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { LocalVariableDeclaration } from "./LocalVariableDeclaration";
import { Statement } from "./Statement copy";


@Injectable({
    providedIn: 'root',
})
export class BlockStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private localVariableDeclaration:LocalVariableDeclaration,
        private statement: Statement,
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        // let regra1 = [this.localVariableDeclaration, PalavrasReservadas.SEMICOLON]
        // let regra2 = [this.statement]
        // // let regra2 = [this, this.blockStatement]
        // this.objectService.validaRegra(regra1)
	}

}