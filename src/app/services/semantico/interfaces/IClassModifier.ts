import { PalavrasReservadas } from "../Reservadas";

export interface IClassModifier {
    regra1: PalavrasReservadas.PUBLIC 
    regra2: PalavrasReservadas.ABSTRACT 
    regra3: PalavrasReservadas.FINAL
    processar(a: any): any
}