import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { OperationalExpression } from "./OperationalExpression";


@Injectable({
    providedIn: 'root',
})
export class RelationalExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private operationalExpression:OperationalExpression,     
    ){

    }

    message(): IObjectLog {
        return {
            analise: "RelationalExpression",
            status: true
        }
    }


    palavras = [
        [PalavrasReservadas.EQUALS],
        [PalavrasReservadas.NOT_EQUALS],
        [PalavrasReservadas.LESS_THAN],
        [PalavrasReservadas.LESS_THAN_OR_EQUALS],
        [PalavrasReservadas.GREATER_THAN],
        [PalavrasReservadas.GREATER_THAN_OR_EQUALS],
    ]

    processar(){
        this.objectService.logClas(this.message(), true);

        var regra1 = [PalavrasReservadas.EQUALS,this.operationalExpression, this]
		var regra2 = [PalavrasReservadas.NOT_EQUALS,this.operationalExpression, this]
		var regra3 = [PalavrasReservadas.LESS_THAN,this.operationalExpression, this]
		var regra4 = [PalavrasReservadas.LESS_THAN_OR_EQUALS,this.operationalExpression, this]
		var regra5 = [PalavrasReservadas.GREATER_THAN,this.operationalExpression, this]
		var regra6 = [PalavrasReservadas.GREATER_THAN_OR_EQUALS,this.operationalExpression, this]
        
        if(this.objectService.validaPalavrasReservadas2(this)){
            this.objectService.validaRegras([regra1,regra2,regra3,regra4,regra5,regra6])
        }

        this.objectService.logClas(this.message(), false);
	}

}