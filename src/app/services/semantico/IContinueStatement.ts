import { PalavrasReservadas } from "../Reservadas";
import { IIdentifier } from "./interfaces/IIdentifier";

export interface IContinueStatement {
    regra1: PalavrasReservadas.CONTINUE
    identifier: IIdentifier
    regra2: PalavrasReservadas.SEMICOLON
}