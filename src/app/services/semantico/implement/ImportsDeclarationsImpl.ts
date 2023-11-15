import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ImportsDeclarationImpl } from "./ImportsDeclarationImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class ImportsDeclarationsImpl implements ILog {

    constructor(
        private importsDeclarationImpl: ImportsDeclarationImpl,
        private objectService: ObjectService,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Import Declarations",
            status: true
        }
    }

    processar(){
        this.objectService.logStatusSemantico(this.message(), true)

        this.importsDeclarationImpl.processar() 
        this.objectService.getVetorTokensAtual(PalavrasReservadas.IMPORT)
        this.processar()
        
        this.objectService.logStatusSemantico(this.message(), false)
    }

}