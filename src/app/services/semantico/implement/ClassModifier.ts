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
            analise: "ClassModifier",
            status: true
        }
    }

    palavras = [
        PalavrasReservadas.PUBLIC,
        PalavrasReservadas.ABSTRACT,
        PalavrasReservadas.FINAL
    ]
// Regra: <classModifier> → public | abstract | final
    processar() {

        this.objectService.logClas(this.message(), true);

        let regra1 = [PalavrasReservadas.PUBLIC]
        let regra2 = [PalavrasReservadas.ABSTRACT]
        let regra3 = [PalavrasReservadas.FINAL]
        this.objectService.validaRegras([regra1,regra2,regra3])

        this.objectService.logClas(this.message(), false);
        
    }
}