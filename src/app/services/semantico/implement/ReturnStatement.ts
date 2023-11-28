import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { Identifier } from "./Identifier";
import { PalavrasReservadas } from "../../Reservadas";
import { Expression } from "./Expression";


@Injectable({
    providedIn: 'root',
})
export class ReturnStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ReturnStatement",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

        // var regra1 = [PalavrasReservadas.RETURN, this.injector.get(Expression), PalavrasReservadas.SEMICOLON]
        // this.objectService.validaRegra(regra1)

        var regra2 = [PalavrasReservadas.RETURN, this.injector.get(Identifier), PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra2])

        this.objectService.logClas(this.message(), false);
	}

}