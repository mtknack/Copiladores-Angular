import { Injectable } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { PalavrasReservadas } from "../../Reservadas";


@Injectable({
    providedIn: 'root',
})
export class AssignmentOperator implements ILog {

    constructor(
        private objectService: ObjectService,
        
    ){
    }

    message(): IObjectLog {
        return {
            analise: "Assignment",
            status: true
        }
    }


    processar(){

        var regra1 = PalavrasReservadas.ASSIGN
        var regra2 = PalavrasReservadas.MULTIPLY_ASSIGN
        var regra3 = PalavrasReservadas.DIVIDE_ASSIGN
        var regra4 = PalavrasReservadas.MODULO_ASSIGN
        var regra5 = PalavrasReservadas.ADD_ASSIGN
        var regra6 = PalavrasReservadas.SUBTRACT_ASSIGN
        var regra7 = PalavrasReservadas.LEFT_SHIFT_ASSIGN
        var regra8 = PalavrasReservadas.RIGHT_SHIFT_ASSIGN
        var regra9 = PalavrasReservadas.UNSIGNED_RIGHT_SHIFT_ASSIGN
        var regra10 = PalavrasReservadas.AND_ASSIGN
        var regra11 = PalavrasReservadas.XOR_ASSIGN
        

        this.objectService.validaRegras([regra1,regra2,regra3,regra4,regra5,regra6,regra7,regra8,regra9,regra10,regra11])

        // fazer um validaRegra de multiplas opções, onde se o de cima der erro o de baixo é chamado

	}

}