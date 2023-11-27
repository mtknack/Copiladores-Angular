import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { Identifier } from "./Identifier";
import { PalavrasReservadas } from "../../Reservadas";

@Injectable({
    providedIn: 'root',
})
export class ContinueStatement implements ILog {

    constructor(
        private objectService : ObjectService,
        private identifier: Identifier
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ContinueStatement",
            status: true
        }
    }


    processar(){
        let regra1 = [PalavrasReservadas.CONTINUE, this.identifier, PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra1])
	}

}