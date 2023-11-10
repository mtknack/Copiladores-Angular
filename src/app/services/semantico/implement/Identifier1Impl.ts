import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { IClassModifier } from "../IClassModifier";


@Injectable({
    providedIn: 'root',
})
export class ClassDeclarationImpl implements IClassModifier {

    regra1!: PalavrasReservadas.ABSTRACT | PalavrasReservadas.FINAL | PalavrasReservadas.PUBLIC;

    processar( a: any){

        if(a == this.regra1){
            return a;
        }
        else{
            return a + 'erro'
        }
    }
}