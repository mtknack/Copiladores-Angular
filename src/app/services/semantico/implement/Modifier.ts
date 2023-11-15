import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class Modifier implements ILog {

    constructor(
        private objectService: ObjectService,
    ){}

    message(): IObjectLog {
        return {
            analise: "Modifier Declaration",
            status: true
        }
    }
// Regra: <classModifier> → public | abstract | final
    processar(): boolean {
        var flag: boolean = false; 
        this.objectService.logStatusSemantico(this.message(), true)

        if(this.objectService.validaPalavraReservada(PalavrasReservadas.PUBLIC)){
            flag = true;
        }
        else{
            if(this.objectService.validaPalavraReservada(PalavrasReservadas.PROTECTED)){
                flag= true;
            }
            else{
                if(this.objectService.validaPalavraReservada(PalavrasReservadas.PRIVATE)){
                    flag= true;
                }
								else{
									if(this.objectService.validaPalavraReservada(PalavrasReservadas.STATIC)){
											flag= true;
									}
									else{
										if(this.objectService.validaPalavraReservada(PalavrasReservadas.FINAL)){
												flag= true;
										}
								}
							}
            }
        }

        this.objectService.logStatusSemantico(this.message(), false)
        return flag;
    }
}