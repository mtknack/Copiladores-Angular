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
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ContinueStatement",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);

        let regra1 = [PalavrasReservadas.CONTINUE, PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}