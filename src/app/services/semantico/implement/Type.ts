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
	
	palavras = [
		[PalavrasReservadas.BYTE, ],
		[PalavrasReservadas.SHORT, ],
		[PalavrasReservadas.INT, ],
		[PalavrasReservadas.LONG, ],
		[PalavrasReservadas.CHAR, ],
		[PalavrasReservadas.FLOAT, ],
		[PalavrasReservadas.DOUBLE, ],
		[PalavrasReservadas.BOOLEAN, ],
		[PalavrasReservadas.VOID, ]
	]

    processar() {        
        this.objectService.validaRegras(this.palavras)
    }


}