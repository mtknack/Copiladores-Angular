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
        private objectService : ObjectService
    ){
    }

    message(): IObjectLog {
        return {
            analise: "BreakStatement",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

        let regra1 = [PalavrasReservadas.BREAK, PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}