import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { IClassModifier } from "../IClassModifier";
import { IObjectInfo } from "./IObjectInfo";


@Injectable({
    providedIn: 'root',
})
export class ClassDeclarationImpl implements IClassModifier {

    regra1!: PalavrasReservadas.ABSTRACT | PalavrasReservadas.FINAL | PalavrasReservadas.PUBLIC;

    processar( object: IObjectInfo ): any{

        if(object.vetorTokens[object.atual] == PalavrasReservadas.ABSTRACT || object.vetorTokens[object.atual] == PalavrasReservadas.FINAL || PalavrasReservadas.PUBLIC){
            return true
        }
        else{
            return false
        }
    }
}