import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { MethodDeclaration } from "./MethodDeclaration";


@Injectable({
    providedIn: 'root',
})
export class FieldMethodDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
        private fieldDeclaration : FieldDeclaration,
        private methodDeclaration:MethodDeclaration
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [this.fieldDeclaration]
        let regra2 = [this.methodDeclaration]
        try{
            this.objectService.validaRegra(regra1)
        }catch{
            this.objectService.validaRegra(regra2)
        }
	}

}