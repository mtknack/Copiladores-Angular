import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ImportDeclaration } from "./ImportDeclaration";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Modifier } from "./Modifier";
import { Identifier } from "./Identifier";
import { Type } from "./Type";


@Injectable({
    providedIn: 'root',
})
export class ClassBodyDeclarations implements ILog {

    constructor(
        private objectService: ObjectService,
				private modifier: Modifier,
				private identifier: Identifier,
				private type: Type,
				// private fieldMethodDeclarations : FieldMethodDeclarations 
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclarations Declarations",
            status: true
        }
    }

		// Regra: <classBodyDeclarations> → <classBodyDeclaration> | <classBodyDeclarations> <classBodyDeclaration>
    processar(){
		// TODO: fazer para rodar mais de uma vez aqui dentro sem ficar em um loop infinito

    }

}