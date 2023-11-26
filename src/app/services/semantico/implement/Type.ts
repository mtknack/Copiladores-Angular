import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ObjectService } from "../Objetcs/ObjectService";


@Injectable({
    providedIn: 'root',
})
export class Type implements ILog {

    constructor(
        private objectService: ObjectService,
    ){}

	
    message(): IObjectLog {
        return {
            analise: "Type Declaration",
            status: true
        }
    }
	
	types = [
		PalavrasReservadas.BYTE, 
		PalavrasReservadas.SHORT, 
		PalavrasReservadas.INT, 
		PalavrasReservadas.LONG, 
		PalavrasReservadas.CHAR, 
		PalavrasReservadas.FLOAT, 
		PalavrasReservadas.DOUBLE, 
		PalavrasReservadas.BOOLEAN, 
		PalavrasReservadas.VOID, 
	]

    processar() {
        try {
            this.objectService.validaRegra(['MULTIPLA PALAVRA'], this.types)
		} catch (error) {
			
		}
    }

	getTypes(atual: string): boolean{

		var busca = this.types.filter(x => x == atual)
        if (
            busca[0] != undefined
        ) {
            return true
        }
        else {
            return false
        }
	}
}