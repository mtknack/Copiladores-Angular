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
            analise: "BlockStatement",
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
        PalavrasReservadas.RETURN,
        PalavrasReservadas.IF,
        PalavrasReservadas.WHILE, 
        PalavrasReservadas.TRY, 
        PalavrasReservadas.NEW
    ]

    processar(){
        
        this.objectService.logClas(this.message(), true);

        let regra1 = [this.localVariableDeclaration, PalavrasReservadas.SEMICOLON]
        let regra2 = [this.statement, this]
        
        console.log(this.objectService.object.tokens[this.objectService.object.atual])   
        
        // if(this.objectService.validaPalavraReservadaSemPular(PalavrasReservadas.RIGHT_BRACE)){
        //     console.log("teste")
        // }
        if(this.objectService.validaPalavrasReservadas(this.type)){
            console.log('entrei variavel')
            this.objectService.validaRegras([regra1])
            this.processar()
        }
        else if(this.objectService.validaPalavrasReservadas(this)){
            this.objectService.validaRegras([regra2])
        }

        this.objectService.logClas(this.message(), false);

	}

}