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
        this.objectService.logClas(this.message(), true);

        // aqui acontece o erro de que caso é tirado o ultimo } não pega o error
        var regra1 = [PalavrasReservadas.ELSE, this.injector.get(Statement)]
        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.ELSE)){
            this.objectService.validaRegras([regra1])
        }
        this.objectService.logClas(this.message(), false);
	}

}