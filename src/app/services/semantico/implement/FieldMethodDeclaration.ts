import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { MethodDeclaration } from "./MethodDeclaration";
import { VariableDeclarators } from "./VariableDeclarators";


@Injectable({
    providedIn: 'root',
})
export class FieldMethodDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
        private variableDeclarators: VariableDeclarators,
        private methodDeclaration: MethodDeclaration
    ){}

    message(): IObjectLog {
        return {
            analise: "FieldMethodDeclaration",
            status: true
        }
    }

    processar(){
        let regra1 = [this.variableDeclarators, PalavrasReservadas.SEMICOLON]
        let regra2 = [this.methodDeclaration]

        // if(this.objectService.validaPalavraReservadaSemPular()){

        // }
        // debugger
        this.objectService.validaRegras([regra1,regra2])
        
	}

}