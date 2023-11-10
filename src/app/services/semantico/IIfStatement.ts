import { PalavrasReservadas } from "../Reservadas";
import { IExpression } from "./IExpression";
import { IIfThenElseStatement } from "./IIfThenElseStatement";
import { IStatement } from "./IStatement";

export interface IIfStatement {
    regra1: PalavrasReservadas.IF
    regra2: PalavrasReservadas.LEFT_PARENTHESIS
    expression: IExpression
    regra3: PalavrasReservadas.RIGHT_PARENTHESIS
    statement: IStatement
    ifThenElseStatement: IIfThenElseStatement
}