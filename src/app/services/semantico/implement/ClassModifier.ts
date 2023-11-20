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
    processar() {
        let regra1 = [PalavrasReservadas.PUBLIC]
        let regra2 = [PalavrasReservadas.ABSTRACT]
        let regra3 = [PalavrasReservadas.FINAL]
        try{
            this.objectService.validaRegra(regra1)
        }catch{
            try{
                this.objectService.validaRegra(regra2)
            }catch{
                this.objectService.validaRegra(regra3)
            }
        }
    }
}