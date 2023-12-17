import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { MethodInvocation } from "./MethodInvocation";
import { Tipo } from "../../Interfaces";
import { Identifier1 } from "./Identifier1";


@Injectable({
    providedIn: 'root',
})
export class UnaryExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private identifier1: Identifier1,
        private methodInvocation: MethodInvocation
    ){

    }

    message(): IObjectLog {
        return {
            analise: "UnaryExpression",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.ADD, this.identifier1, this.methodInvocation]
		let regra2 = [PalavrasReservadas.SUBTRACT, this.identifier1, this.methodInvocation]
		let regra3 = [this.identifier1, this.methodInvocation]

        if(!(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.ADD) || this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.SUBTRACT) || this.objectService.validaTipoTokenAtualSemPular(Tipo.IDENTIFICADOR_VALIDO) || this.objectService.validaTipoTokenAtualSemPular(Tipo.NUMBER))){
            return
        }
        this.objectService.validaRegras([regra1, regra2, regra3])
        
	}

}