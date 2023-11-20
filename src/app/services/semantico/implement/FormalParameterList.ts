import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { FormalParameter } from "./FormalParameter";


@Injectable({
    providedIn: 'root',
})
export class FormalParameterList implements ILog {

    constructor(
        private objectService: ObjectService,
        private formalParameter:FormalParameter
        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [this.formalParameter]
        // let regra2 = [this, PalavrasReservadas.COMMA, this.formalParameter]
        this.objectService.validaRegra(regra1)
        
	}

}