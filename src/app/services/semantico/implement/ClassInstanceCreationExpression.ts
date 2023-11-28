import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { ArgumentList } from "./ArgumentList";
import { PalavrasReservadas } from "../../Reservadas";


@Injectable({
    providedIn: 'root',
})
export class ClassInstanceCreationExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        // private classType: ClassType, ??????????????????????????????????
        private argumentList: ArgumentList
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

        var regra1 = [PalavrasReservadas.NEW, /* this.classType */, 
        PalavrasReservadas.LEFT_PARENTHESIS, this.argumentList, 
        PalavrasReservadas.RIGHT_PARENTHESIS]

        this.objectService.validaRegra(regra1)

        this.objectService.logClas(this.message(), false);
	}

}