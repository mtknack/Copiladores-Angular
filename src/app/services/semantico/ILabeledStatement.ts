import { PalavrasReservadas } from "../Reservadas";
import { IStatement } from "./IStatement";

export interface ILabelStatement{
    regra1: PalavrasReservadas.COLON
    statement: IStatement
}