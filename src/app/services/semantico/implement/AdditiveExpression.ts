import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Term } from "./Term";


@Injectable({
    providedIn: 'root',
})
export class AdditiveExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private term: Term,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.ADD, this.term, this]
		let regra2 = [PalavrasReservadas.SUBTRACT, this.term, this]

        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.ADD)){
            this.objectService.validaRegra(regra1)
        }else if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.SUBTRACT)){
            this.objectService.validaRegra(regra2)
        }
        
	}

}