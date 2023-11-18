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
// Regra: <classModifier> → public | abstract | final
    processar(): boolean {
        var flag: boolean = false; 
        // this.objectService.logStatusSemantico(this.message(), true)

        // if(this.objectService.validaPalavraReservada(PalavrasReservadas.BYTE)){
        //     flag = true;
        // }
        // else{
		// 			if(this.objectService.validaPalavraReservada(PalavrasReservadas.SHORT)){
		// 					flag= true;
		// 			}
		// 			else{
		// 				if(this.objectService.validaPalavraReservada(PalavrasReservadas.INT)){
		// 						flag= true;
		// 				}
		// 				else{
		// 					if(this.objectService.validaPalavraReservada(PalavrasReservadas.LONG)){
		// 							flag= true;
		// 					}
		// 					else{
		// 						if(this.objectService.validaPalavraReservada(PalavrasReservadas.CHAR)){
		// 								flag= true;
		// 						}
		// 						else{
		// 							if(this.objectService.validaPalavraReservada(PalavrasReservadas.FLOAT)){
		// 									flag= true;
		// 							}
		// 							else{
		// 								if(this.objectService.validaPalavraReservada(PalavrasReservadas.DOUBLE)){
		// 										flag= true;
		// 								}
		// 								else{
		// 									if(this.objectService.validaPalavraReservada(PalavrasReservadas.BOOLEAN)){
		// 											flag= true;
		// 									}
		// 									else{
		// 										if(this.objectService.validaPalavraReservada(PalavrasReservadas.VOID)){
		// 												flag= true;
		// 										}
		// 								}
		// 							}
		// 						}
		// 					}
		// 				}
		// 			}
		// 		}
		// 	}

        // this.objectService.logStatusSemantico(this.message(), false)
        return flag;
    }
}