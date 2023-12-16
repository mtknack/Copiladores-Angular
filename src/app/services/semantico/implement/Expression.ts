import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ComparationExpression } from "./ComparationExpression";
import { Expression2 } from "./Expression2";


@Injectable({
    providedIn: 'root',
})
export class Expression implements ILog {

    constructor(
        private objectService: ObjectService,
        private comparationExpression: ComparationExpression,
        private expression2:Expression2,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Expression",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);

		let regra1 = [this.comparationExpression, this.expression2]
        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}