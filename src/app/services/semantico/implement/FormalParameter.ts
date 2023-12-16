import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { Type } from "./Type";
import { Identifier } from "./Identifier";


@Injectable({
    providedIn: 'root',
})
export class FormalParameter implements ILog {

    constructor(
        private objectService: ObjectService,
        private type:Type,
        private identifier:Identifier
        
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }

    processar(){
        let regra1 = [this.type, this.identifier]
        this.objectService.validaRegras([regra1])
        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.COMMA)){
            this.objectService.validaPalavraReservada(PalavrasReservadas.COMMA)
            this.processar()
        }
        
	}

}