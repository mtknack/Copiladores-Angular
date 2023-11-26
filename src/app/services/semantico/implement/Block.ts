import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { BlockStatements } from "./BlockStatements";


@Injectable({
    providedIn: 'root',
})
export class Block implements ILog {

    constructor(
        private objectService: ObjectService,
        private blockStatements : BlockStatements,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        // let regra1 = [PalavrasReservadas.LEFT_BRACKET,this.blockStatements,PalavrasReservadas.RIGHT_BRACKET]
        // this.objectService.validaRegra(regra1)
	}

}