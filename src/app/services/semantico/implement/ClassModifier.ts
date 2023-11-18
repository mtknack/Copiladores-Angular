import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";


@Injectable({
    providedIn: 'root',
})
export class ClassModifier implements ILog {

    constructor(
        private objectService: ObjectService,
    ){}

    message(): IObjectLog {
        return {
            analise: "ClassModifier Declaration",
            status: true
        }
    }
// Regra: <classModifier> → public | abstract | final
    processar(): boolean {
        var flag: boolean = false; 
        // this.objectService.logStatusSemantico(this.message(), true)

        // if(this.objectService.validaPalavraReservada(PalavrasReservadas.PUBLIC)){
        //     flag = true;
        // }
        // else{
        //     if(this.objectService.validaPalavraReservada(PalavrasReservadas.ABSTRACT)){
        //         flag= true;
        //     }
        //     else{
        //         if(this.objectService.validaPalavraReservada(PalavrasReservadas.FINAL)){
        //             flag= true;
        //         }
        //     }
        // }

        // this.objectService.logStatusSemantico(this.message(), false)
        return flag;
    }
}