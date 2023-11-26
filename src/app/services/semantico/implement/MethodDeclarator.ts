import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { FormalParameterList } from "./FormalParameterList";


@Injectable({
    providedIn: 'root',
})
export class MethodDeclarator implements ILog {

    constructor(
        private objectService: ObjectService,
        private formalParameterList: FormalParameterList
        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.LEFT_BRACE,this.formalParameterList, PalavrasReservadas.RIGHT_BRACE]
        this.objectService.validaRegra(regra1)
        
	}

}