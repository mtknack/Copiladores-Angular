import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";


@Injectable({
    providedIn: 'root',
})
export class Modifier implements ILog {

    constructor(
        private objectService: ObjectService,
    ) { }

    message(): IObjectLog {
        return {
            analise: "Modifier Declaration",
            status: true
        }
    }

    palavras = [
        [PalavrasReservadas.PUBLIC],
        [PalavrasReservadas.PROTECTED],
        [PalavrasReservadas.PRIVATE],
        [PalavrasReservadas.STATIC],
        [PalavrasReservadas.FINAL],
    ]


    processar() {
        try {
            this.objectService.validaRegras(this.palavras)
        } catch (error) {
            throw error
        }
    }

    // getModifier(atual: string): boolean {

    //     var busca = this.modifiers.filter(x => x == atual)
    //     if (
    //         busca[0] != undefined
    //     ) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }
}