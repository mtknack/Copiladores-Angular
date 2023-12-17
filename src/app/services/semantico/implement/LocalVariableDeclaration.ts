import { Injectable, Injector } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { FieldDeclaration } from "./FieldDeclaration";
import { Type } from "./Type";
import { Identifier } from "./Identifier";
import { VariableDeclarators } from "./VariableDeclarators";
import { BlockStatement } from "./BlockStatement";
import { Identifier1 } from "./Identifier1";


@Injectable({
    providedIn: 'root',
})
export class LocalVariableDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
        private type: Type,
        private identifier: Identifier,
        private variableDeclarators: VariableDeclarators,
        private injector: Injector
    ){
    }

    message(): IObjectLog {
        return {
            analise: "LocalVariableDeclaration",
            status: true
        }
    }
    palavras = [
        PalavrasReservadas.INT,
        PalavrasReservadas.LONG,
        PalavrasReservadas.BYTE,
        PalavrasReservadas.CHAR,
        PalavrasReservadas.FLOAT,
        PalavrasReservadas.BOOLEAN,
        PalavrasReservadas.DOUBLE,
        PalavrasReservadas.SHORT,
        PalavrasReservadas.VOID
    ]

    processar(){

        let asl = 10, fg = 19

        this.objectService.logClas(this.message(), true);

        let regra1 = [this.type, this.identifier,this.variableDeclarators]
        let regra2 = [PalavrasReservadas.COMMA,// this.injector.get(BlockStatement)
        ]

        this.objectService.validaRegras([regra1])
        if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.COMMA)){
            this.objectService.validaRegras([regra2])
        }

        this.objectService.logClas(this.message(), false);
	}

}