import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";
import { ClassBody } from "./ClassBody";
import { Identifier } from "./Identifier";
import { ClassModifier } from "./ClassModifier";

@Injectable({
    providedIn: 'root',
})
export class ClassDeclaration implements ILog {
    
    constructor(
        private objectService: ObjectService,
        private classModifier: ClassModifier,
        private identifier: Identifier,
        private classBody:ClassBody
    ){}

    message(): IObjectLog {
        return {
            analise: "Class Declaration",
            status: true
        }
    }

    processar(): any{

        let regra1 = [this.classModifier, PalavrasReservadas.CLASS, this.identifier, this.classBody]
        this.objectService.validaRegra(regra1)


    }

}