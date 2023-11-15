import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { IdentifierImpl } from "./IdentifierImpl";


@Injectable({
    providedIn: 'root',
})
export class PackageDeclarationImpl {

    constructor(
        private identifier: IdentifierImpl,
        private objectService: ObjectService,
    ){

    }

    processar(): boolean{

        if(this.objectService.getVetorTokensAtual(PalavrasReservadas.PACKAGE)){
            this.objectService.skipIndex()
            if(this.identifier.processar()){
                this.objectService.skipIndex()
                this.objectService.getVetorTokensAtual(PalavrasReservadas.SEMICOLON)
            }
            return true
        }else{
            return false
        }

    }

}