import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { PalavrasReservadas } from "../../Reservadas";
import { Statement } from "./Statement";


@Injectable({
    providedIn: 'root',
})
export class IfThenElseStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector,
    ){
    }

    message(): IObjectLog {
        return {
            analise: "IfThenElseStatement",
            status: true
        }
    }


    processar(){
        var regra1 = [PalavrasReservadas.ELSE, this.injector.get(Statement)]

        this.objectService.validaRegra(regra1)
	}

}