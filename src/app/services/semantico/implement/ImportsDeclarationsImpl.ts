import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { IdentifierImpl } from "./IdentifierImpl";
import { ImportsDeclarationImpl } from "./ImportsDeclarationImpl";


@Injectable({
    providedIn: 'root',
})
export class ImportsDeclarationsImpl {

    constructor(
        private importsDeclarationImpl: ImportsDeclarationImpl,
        private objectService: ObjectService,
    ){

    }

    processar(): boolean{

        if(this.importsDeclarationImpl.processar()){
            if( this.objectService.verificationWithinRange() && this.objectService.getVetorTokensAtual(PalavrasReservadas.IMPORT)){
                this.processar()
                return true
            }
        }

        return true
    }

}