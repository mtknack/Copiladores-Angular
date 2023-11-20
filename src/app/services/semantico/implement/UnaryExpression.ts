import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";

import { Identifier1 } from "./Identifier1";
import { MethodInvocation } from "./MethodInvocation";


@Injectable({
    providedIn: 'root',
})
export class UnaryExpression implements ILog {

    constructor(
        private objectService: ObjectService,
        private identifier1:Identifier1,
        private methodInvocation:MethodInvocation
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [PalavrasReservadas.ADD,this.identifier1,this.methodInvocation]
		let regra2 = [PalavrasReservadas.SUBTRACT,this.identifier1,this.methodInvocation]
		let regra3 = [this.identifier1,this.methodInvocation]
        try{
            this.objectService.validaRegra(regra1)
        }
        catch{
            try{
                this.objectService.validaRegra(regra2)
            }
            catch{
                this.objectService.validaRegra(regra3)
            }
        }
	}

}