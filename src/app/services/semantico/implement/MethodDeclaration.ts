import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { MethodDeclarator } from "./MethodDeclarator";
import { Block } from "./Block";


@Injectable({
    providedIn: 'root',
})
export class MethodDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
        private methodDeclarator : MethodDeclarator,
        private block : Block,
        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }


    processar(){
        let regra1 = [this.methodDeclarator, this.block]
        this.objectService.validaRegra(regra1)
        
	}

}