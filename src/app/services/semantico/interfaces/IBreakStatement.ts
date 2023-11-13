import { PalavrasReservadas } from "../Reservadas";
import { IIdentifier } from "./IIdentifier";

export interface IBreakStatement {
    regra1: PalavrasReservadas.BREAK
    identifier: IIdentifier
    regra2: PalavrasReservadas.SEMICOLON
}