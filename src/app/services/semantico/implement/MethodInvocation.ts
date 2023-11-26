import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";

import { Identifier } from "./Identifier";
import { ArgumentList } from "./ArgumentList";


@Injectable({
    providedIn: 'root',
})
export class MethodInvocation implements ILog {

    constructor(
        private objectService: ObjectService,
        private identifier:Identifier,
        private argumentList:ArgumentList
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		// let regra1 = [PalavrasReservadas.LEFT_BRACE,this.argumentList, PalavrasReservadas.RIGHT_BRACE]
		// let regra2 = [PalavrasReservadas.SUPER,PalavrasReservadas.PERIOD,this.identifier,this.argumentList, PalavrasReservadas.RIGHT_BRACE]
		
        // try{
        //     this.objectService.validaRegra(regra1)
        // }
        // catch{
        //     this.objectService.validaRegra(regra2)            
        // }
	}

}