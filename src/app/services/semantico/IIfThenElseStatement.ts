import { PalavrasReservadas } from "../Reservadas";
import { IStatement } from "./IStatement";

export interface IIfThenElseStatement {
    regra1: PalavrasReservadas.ELSE
    statement: IStatement
}