import { Injectable, Inject, forwardRef } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { LocalVariableDeclaration } from "./LocalVariableDeclaration";
import { Statement } from "./Statement";
import { Type } from "./Type";
import { Identifier } from "./Identifier";
import { Tipo } from "../../Interfaces";


@Injectable({
    providedIn: 'root',
})
export class BlockStatement implements ILog {

    constructor(
        private objectService: ObjectService,
        private localVariableDeclaration: LocalVariableDeclaration,
        private statement: Statement,
        private type: Type,
        private identifier: Identifier
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }

    palavras = [
        PalavrasReservadas.LEFT_BRACE, 
        PalavrasReservadas.SEMICOLON, 
        Tipo.IDENTIFICADOR_VALIDO,
        PalavrasReservadas.DO, 
        PalavrasReservadas.BREAK, 
        PalavrasReservadas.CONTINUE, 
        PalavrasReservadas.WHILE, 
        PalavrasReservadas.TRY, 
        PalavrasReservadas.NEW
    ]

    processar(){
        // debugger
        let regra1 = [this.localVariableDeclaration, PalavrasReservadas.SEMICOLON, this]
        let regra2 = [this.statement, this]
        
        console.log(this.objectService.object.tokens[this.objectService.object.atual])   
        debugger
        // if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.RIGHT_BRACE)){
        //     console.log("teste")
        // }
        if(this.objectService.validaPalavrasReservadas(this.type)){
            this.objectService.validaRegras([regra1])
        }
        else if(this.objectService.validaPalavrasReservadas(this)){
            // this.objectService.loop = 1
            this.objectService.validaRegras([regra2])
        }

	}

}