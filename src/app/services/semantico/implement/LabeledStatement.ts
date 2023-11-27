import { Injectable, Injector } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { PalavrasReservadas } from "../../Reservadas";
import { Statement } from "./Statement";


@Injectable({
    providedIn: 'root',
})
export class LabeledStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector
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
       var regra1 = [PalavrasReservadas.COLON, this.injector.get(Statement)]
       this.objectService.validaRegras([regra1])
	}

}