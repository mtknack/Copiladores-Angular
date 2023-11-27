import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { PalavrasReservadas } from "../../Reservadas";
import { Identifier } from "./Identifier";


@Injectable({
    providedIn: 'root',
})
export class BreakStatement implements ILog {

    constructor(
        private objectService : ObjectService,
        private identifier: Identifier
    ){
    }

    message(): IObjectLog {
        return {
            analise: "BreakStatement",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.BREAK, this.identifier, PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra1])
	}

}