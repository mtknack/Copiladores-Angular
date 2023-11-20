import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Modifier } from "./Modifier";
import { Identifier } from "./Identifier";
import { Type } from "./Type";
import { VariableDeclarator } from "./VariableDeclarator";


@Injectable({
    providedIn: 'root',
})
export class VariableDeclarators implements ILog {

    constructor(
        private objectService: ObjectService,
        private variableDeclarator:VariableDeclarator,
        private variableDeclarators:VariableDeclarators,
        private identifier:Identifier,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
		let regra1 = [this.variableDeclarator]
		let regra2 = [PalavrasReservadas.COMMA, this.identifier, this.variableDeclarators]
        try{
            this.objectService.validaRegra(regra1)
        }catch{
            this.objectService.validaRegra(regra2)
        }
	}

}