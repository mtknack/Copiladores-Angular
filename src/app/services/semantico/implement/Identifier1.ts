import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { Identifier } from "./Identifier";
import { Tipo } from "../../Interfaces";
import { ObjectService } from "../Objetcs/ObjectService";


@Injectable({
    providedIn: 'root',
})

export class Identifier1 {
    constructor(
        private objectService: ObjectService,
        // private identifier:Identifier
    ){
    }

    

    processar( a: any){
        let regra1 = [Tipo.IDENTIFICADOR_VALIDO]
        let regra2 = [Tipo.NUMBER]
        this.objectService.validaRegras([regra1, regra2])
        
    }
}