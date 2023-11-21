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

    async processar(){

        try {
            await this.objectService.logStatusSemantico(this.message(), true)

            await this.importsDeclarationImpl.processar() 
            try {
                await this.objectService.getVetorTokensAtual(PalavrasReservadas.IMPORT)
                await this.processar()
            } catch (error) {
                
            }
            
            await this.objectService.logStatusSemantico(this.message(), false)
        } catch (error) {
            throw error
        }
    }

}