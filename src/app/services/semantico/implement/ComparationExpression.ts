import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { OperationalExpression } from "./OperationalExpression";
import { RelationalExpression } from "./RelationalExpression";


@Injectable({
    providedIn: 'root',
})
export class ComparationExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private operationalExpression: OperationalExpression,
        private relationalExpression: RelationalExpression,
    ){}

    message(): IObjectLog {
        return {
            analise: "ComparationExpression",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

		var regra1 = [this.operationalExpression, this.relationalExpression]
        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}