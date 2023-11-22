import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Identifier } from "./Identifier";


@Injectable({
    providedIn: 'root',
})
export class ImportDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
        private identifier:Identifier
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Import Declarations",
            status: true
        }
    }

    processar(){
        let regra1 = [PalavrasReservadas.IMPORT, this.identifier, PalavrasReservadas.SEMICOLON]
        this.objectService.validaRegras([regra1]);
    }

}