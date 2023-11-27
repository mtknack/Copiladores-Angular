import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";

import { FormalParameter } from "./FormalParameter";


@Injectable({
    providedIn: 'root',
})
export class MethodDeclarator implements ILog {

    constructor(
        private objectService: ObjectService,
        private formalParameter: FormalParameter
        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.LEFT_PARENTHESIS,this.formalParameter, PalavrasReservadas.RIGHT_PARENTHESIS]
        this.objectService.validaRegra(regra1)
        
	}

}