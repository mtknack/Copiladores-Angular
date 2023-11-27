import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Modifier } from "./Modifier";
import { Identifier } from "./Identifier";
import { Type } from "./Type";
import { VariableDeclarator } from "./VariableDeclarator";
import { Expression } from "./Expression";
import { concatAll } from "rxjs";


@Injectable({
    providedIn: 'root',
})
export class VariableDeclarators implements ILog {

    constructor(
        private objectService: ObjectService,
        private expression: Expression,
        private identifier: Identifier,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.EQUALS, this.expression]
		let regra2 = [PalavrasReservadas.COMMA, this.identifier, this]

        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.EQUALS)){
            this.objectService.validaRegra(regra1)
        }else if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.COMMA)){
            this.objectService.validaRegra(regra2)
        }
    
	}

}