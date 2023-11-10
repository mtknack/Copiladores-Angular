import { PalavrasReservadas } from "../Reservadas"
import { IExpression } from "./IExpression"

export interface IVariableDeclarator{
    regra1: PalavrasReservadas.ASSIGN
    expression: IExpression
    regra2: PalavrasReservadas.EPSON
}