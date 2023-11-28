import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { Type } from "./Type";
import { Identifier } from "./Identifier";
import { VariableDeclarators } from "./VariableDeclarators";


@Injectable({
    providedIn: 'root',
})
export class LocalVariableDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
        private type: Type,
        private identifier:Identifier,
        private variableDeclarators: VariableDeclarators,
    ){
    }

    message(): IObjectLog {
        return {
            analise: "LocalVariableDeclaration",
            status: true
        }
    }


    processar(){

        this.objectService.logClas(this.message(), true);

        let regra1 = [this.type,this.identifier,this.variableDeclarators]
        this.objectService.validaRegras([regra1])

        this.objectService.logClas(this.message(), false);
	}

}