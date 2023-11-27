import { Injectable, Inject, forwardRef } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { BlockStatement } from "./BlockStatement";

@Injectable({
    providedIn: 'root',
})
export class Block implements ILog {

    constructor(
        private objectService: ObjectService,
        private blockStatement: BlockStatement,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.LEFT_BRACE, this.blockStatement, PalavrasReservadas.RIGHT_BRACE]
        this.objectService.validaRegras([regra1])
	}

}