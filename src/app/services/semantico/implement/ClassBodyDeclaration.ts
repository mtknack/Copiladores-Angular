import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Modifier } from "./Modifier";
import { Identifier } from "./Identifier";
import { Type } from "./Type";
import { FieldMethodDeclaration } from "./FieldMethodDeclaration";


@Injectable({
    providedIn: 'root',
})
export class ClassBodyDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
		private modifier: Modifier,
		private identifier: Identifier,
		private type: Type,
		private fieldMethodDeclaration : FieldMethodDeclaration 
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }

    processar(){
        var regra1 = [this.modifier, this.type, this.identifier, this.fieldMethodDeclaration]

        try {
            this.objectService.validaRegra(regra1)
            if(this.objectService.validaPalavrasReservadas(this.modifier)){
                this.objectService.validaRegra([this])
            }
        } catch (error) {
            throw error
        }
        
	}

}