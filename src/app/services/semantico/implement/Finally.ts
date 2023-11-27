import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { PalavrasReservadas } from "../../Reservadas";
import { Block } from "./Block";
import { CatchClause } from "./CatchClause";


@Injectable({
    providedIn: 'root',
})
export class Finally implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector,
    ){
    }

    message(): IObjectLog {
        return {
            analise: "Finally",
            status: true
        }
    }


    processar(){
        var regra1 = [PalavrasReservadas.FINALLY, this.injector.get(Block)]

        this.objectService.validaRegras([regra1])
	}

}