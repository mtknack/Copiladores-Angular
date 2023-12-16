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
            analise: "VariableDeclarators",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);

		let regra1 = [PalavrasReservadas.EQUALS, this.expression]
		let regra2 = [PalavrasReservadas.COMMA, this.identifier, this]

        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.EQUALS)){
            this.objectService.validaRegras([regra1])
        }else if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.COMMA)){
            this.objectService.validaRegras([regra2])
        }
        

        this.objectService.logClas(this.message(), false);
    
	}

}