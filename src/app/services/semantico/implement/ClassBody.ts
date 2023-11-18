import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ClassBodyDeclaration } from "./ClassBodyDeclaration";


@Injectable({
    providedIn: 'root',
})
export class ClassBody implements ILog {

    constructor(
        private objectService: ObjectService,
		private classBodyDeclarations: ClassBodyDeclaration
    ){}

    message(): IObjectLog {
        return {
            analise: "ClassBody Declarations",
            status: true
        }
    }

    // REGRA: <classBody> → { <classBodyDeclarations>? }
    processar(){
        // this.objectService.logStatusSemantico(this.message(), true)

        // this.objectService.validaPalavraReservada(PalavrasReservadas.LEFT_BRACE);

		// 		this.classBodyDeclarations.processar();
        // this.objectService.validaPalavraReservada(PalavrasReservadas.RIGHT_BRACE);
        
        // this.objectService.logStatusSemantico(this.message(), false)
    }

}