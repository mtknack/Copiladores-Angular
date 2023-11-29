import { Injectable, Injector } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { ArgumentList } from "./ArgumentList";
import { PalavrasReservadas } from "../../Reservadas";
import { Identifier } from "./Identifier";


@Injectable({
    providedIn: 'root',
})
export class ClassInstanceCreationExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private argumentList: ArgumentList,
        private injector: Injector
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassInstanceCreationExpression",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);
        //  falta this.argumentList,
        var regra1 = [PalavrasReservadas.NEW, this.injector.get(Identifier),
        PalavrasReservadas.LEFT_PARENTHESIS, 
        PalavrasReservadas.RIGHT_PARENTHESIS,  PalavrasReservadas.SEMICOLON]
        console.log(this.objectService.getObjectAtualToken())
        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}