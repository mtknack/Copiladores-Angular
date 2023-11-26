import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ClassBodyDeclaration } from "./ClassBodyDeclaration";


@Injectable({
    providedIn: 'root',
})
export class ClassBody implements ILog {

    constructor(
        private objectService: ObjectService,
		private classBodyDeclaration: ClassBodyDeclaration
    ){}

    message(): IObjectLog {
        return {
            analise: "ClassBody Declarations",
            status: true
        }
    }

    processar(){

        let regra1 = [PalavrasReservadas.LEFT_BRACE, this.classBodyDeclaration, PalavrasReservadas.RIGHT_BRACE]
        this.objectService.validaRegra(regra1)
    }

}