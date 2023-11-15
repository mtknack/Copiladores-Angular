import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { IdentifierImpl } from "./IdentifierImpl";
import { IClassDeclaration } from "../interfaces/IClassDeclaration";
import { IClassModifier } from "../interfaces/IClassModifier";
import { IIdentifier } from "../interfaces/IIdentifier";
import { IObjectInfo } from "../Objetcs/IObjectInfo";

@Injectable({
    providedIn: 'root',
})
export class ClassDeclarationImpl implements IClassDeclaration {

    regra1: IClassModifier
    regra2: PalavrasReservadas.CLASS
    regra3: IIdentifier
    // regra4: IClassBody

    constructor(
        private classModifier: IClassModifier,
        private reservadasClass: PalavrasReservadas.CLASS,
        private identifier: IdentifierImpl
    ) {
        this.regra1 = classModifier
        this.regra2 = reservadasClass
        this.regra3 = identifier
    }

    processar( object: IObjectInfo ): any {

        if(
            this.regra1.processar(object)
        ){
            return true
        }
        else if(
            this.regra2 == object.vetorTokens[object.atual]
        ){
            object.atual = object.atual++
            if( this.regra3.processar(object)){
                return true
            }
        }
    }
}
