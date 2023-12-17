import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Term } from "./Term";
import { AdditiveExpression } from "./AdditiveExpression";


@Injectable({
    providedIn: 'root',
})
export class OperationalExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private term: Term,
        private additiveExpression: AdditiveExpression
    ){

    }

    message(): IObjectLog {
        return {
            analise: "OperationalExpression",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

		let regra1 = [this.term, this.additiveExpression]
        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}