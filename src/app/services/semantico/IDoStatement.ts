import { PalavrasReservadas } from "../Reservadas";
import { IExpression } from "./IExpression";
import { IStatement } from "./IStatement";

export interface IDoStatement{
    regra1: PalavrasReservadas.DO
    statement: IStatement
    regra2: PalavrasReservadas.WHILE
    regra4: PalavrasReservadas.LEFT_PARENTHESIS
    expression: IExpression
    regra5: PalavrasReservadas.RIGHT_PARENTHESIS
    regra6: PalavrasReservadas.SEMICOLON
}