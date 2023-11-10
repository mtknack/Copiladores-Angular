import { PalavrasReservadas } from "../Reservadas";
import { IExpression } from "./IExpression";
import { IStatement } from "./IStatement";

export interface IWhileStatement {
    regra1: PalavrasReservadas.WHILE
    regra2: PalavrasReservadas.LEFT_PARENTHESIS
    expression: IExpression
    statement: IStatement
}