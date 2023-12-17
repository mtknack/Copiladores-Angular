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
import { Identifier1 } from "./Identifier1";


@Injectable({
    providedIn: 'root',
})
export class VariableDeclarators implements ILog {

    constructor(
        private objectService: ObjectService,
        private expression: Expression,
        private identifier1: Identifier1,
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

		let regra1 = [PalavrasReservadas.ASSIGN, this.expression]
		let regra2 = [PalavrasReservadas.COMMA, this.identifier1, this]
        let regra3 = [PalavrasReservadas.ASSIGN, this.identifier1]


        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.ASSIGN)){
            this.objectService.validaRegras([regra3, regra1])
        }else if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.COMMA)){
            this.objectService.validaRegras([regra2])
        }
        

        this.objectService.logClas(this.message(), false);
    
	}

}