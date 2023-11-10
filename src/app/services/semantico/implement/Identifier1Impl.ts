import { Injectable } from "@angular/core";
import { ReservadasEnum } from "../../Reservadas";
import { IClassModifier } from "../IClassModifier";


@Injectable({
    providedIn: 'root',
})
export class ClassDeclarationImpl implements IClassModifier {

    regra1!: ReservadasEnum.PalavrasReservadas.ABSTRACT | ReservadasEnum.PalavrasReservadas.FINAL | ReservadasEnum.PalavrasReservadas.PUBLIC;

    processar( a: any){

        if(a == this.regra1){
            return a;
        }
        else{
            return a + 'erro'
        }
    }
}