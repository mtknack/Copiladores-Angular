import { Injectable } from "@angular/core";
import { ReservadasEnum } from "../../Reservadas";
import { IClassModifier } from "../IClassModifier";
import { IObjectInfo } from "./IObjectInfo";


@Injectable({
    providedIn: 'root',
})
export class ClassDeclarationImpl implements IClassModifier {

    regra1!: ReservadasEnum.PalavrasReservadas.ABSTRACT | ReservadasEnum.PalavrasReservadas.FINAL | ReservadasEnum.PalavrasReservadas.PUBLIC;

    processar( object: IObjectInfo ): any{

        if(object.vetorTokens[object.atual] == ReservadasEnum.PalavrasReservadas.ABSTRACT || object.vetorTokens[object.atual] == ReservadasEnum.PalavrasReservadas.FINAL || ReservadasEnum.PalavrasReservadas.PUBLIC){
            return true
        }
        else{
            return false
        }
    }
}