import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ImportsDeclarationImpl } from "./ImportsDeclarationImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class ClassBody implements ILog {

    constructor(
        private objectService: ObjectService,
		private classBodyDeclarations: ClassBodyDeclarations
    ){}

    message(): IObjectLog {
        return {
            analise: "ClassBody Declarations",
            status: true
        }
    }

    // REGRA: <classBody> → { <classBodyDeclarations>? }
    processar(){
        this.objectService.logStatusSemantico(this.message(), true)

        this.objectService.validaPalavraReservada(PalavrasReservadas.LEFT_BRACE);
				this.objectService.skipIndex()

				this.classBodyDeclarations.processar();
				
				this.objectService.skipIndex()
        this.objectService.validaPalavraReservada(PalavrasReservadas.RIGHT_BRACE);
        
        this.objectService.logStatusSemantico(this.message(), false)
    }

}