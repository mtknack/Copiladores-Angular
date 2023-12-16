import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { UnaryExpression } from "./UnaryExpression";
import { MultiplicativeExpression } from "./MultiplicativeExpression";


@Injectable({
    providedIn: 'root',
})
export class Term implements ILog {

    constructor(
        private objectService: ObjectService,
        private unaryExpression: UnaryExpression,
        private multiplicativeExpression: MultiplicativeExpression
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Term",
            status: true
        }
    }


    processar(){
        this.objectService.logClas(this.message(), true);

        try{
            this.objectService.expecteds = []
            let regra1 = [this.unaryExpression, this.multiplicativeExpression]
            this.objectService.validaRegras([regra1])
            throw Error('')
        }catch{
            //ESSE CODIGO E O LOG
            let esperados = this.objectService.expecteds
            let msg = '';
            if(esperados.length === 0){
                return Error(``)
            }else{
                msg = "Esperando "
                for (let i = 0; i < esperados.length-1; i++) {
                    const esperado = esperados[i];
                    msg += '"'+esperado.vetor+'"['+ esperado.linha+','+ esperado.coluna+'], '
                }
                const esperado = esperados[esperados.length-1];
                    msg += '"'+esperado.vetor+'"['+ esperado.linha+','+ esperado.coluna+']';
            }

            return Error(msg)
        }

        this.objectService.logClas(this.message(), false); 
	}

}