import { Injectable } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { PalavrasReservadas } from "../../Reservadas";
import { Statement } from "./Statement copy";


@Injectable({
    providedIn: 'root',
})
export class LabeledStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        // private statement: Statement
    ){
    }

    message(): IObjectLog {
        return {
            analise: "LabeledStatement",
            status: true
        }
    }


    processar(){
       
        // var regra1 = PalavrasReservadas.COLON
        // var regra2 = this.statement
        
        // this.objectService.validaRegra([regra1, regra2])
	}

}