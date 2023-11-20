import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ClassBodyDeclarations } from "./ClassBodyDeclarations";


@Injectable({
    providedIn: 'root',
})
export class ClassBody implements ILog {

    constructor(
        private objectService: ObjectService,
		private classBodyDeclarations: ClassBodyDeclarations
    ){}

    message(): IObjectLog {
        return {
            analise: "ClassBody Declarations",
            status: true
        }
    }

    // REGRA: <classBody> → { <classBodyDeclarations>? }
    processar(){
        let regra1 = [PalavrasReservadas.LEFT_BRACKET, this.classBodyDeclarations, PalavrasReservadas.RIGHT_BRACKET]
        this.objectService.validaRegra(regra1)
    }

}