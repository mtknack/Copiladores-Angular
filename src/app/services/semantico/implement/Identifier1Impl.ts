import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";


@Injectable({
    providedIn: 'root',
})
export class Identifier1Impl {

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