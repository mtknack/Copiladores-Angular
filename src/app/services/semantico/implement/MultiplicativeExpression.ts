import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { UnaryExpression } from "./UnaryExpression";


@Injectable({
    providedIn: 'root',
})
export class MultiplicativeExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private unaryExpression: UnaryExpression,

        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.MULTIPLY, this.unaryExpression, this]
		let regra2 = [PalavrasReservadas.DIVIDE, this.unaryExpression, this]
		let regra3 = [PalavrasReservadas.MODULO, this.unaryExpression, this]

        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.MULTIPLY)){
            this.objectService.validaRegras([regra1])
        }
        else if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.DIVIDE)){
            this.objectService.validaRegras([regra2])
        }
        else if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.MODULO)){
            this.objectService.validaRegras([regra3])
        }
      
	}

}