import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { PalavrasReservadas } from "../../Reservadas";
import { Block } from "./Block";
import { CatchesStatement } from "./CatchesStatement";


@Injectable({
    providedIn: 'root',
})
export class TryStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private injector: Injector,
        private catchesStatement: CatchesStatement,
    ){
    }

    message(): IObjectLog {
        return {
            analise: "TryStatement",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

        var regra1 = [PalavrasReservadas.TRY, this.injector.get(Block), this.catchesStatement]

        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
    }

}