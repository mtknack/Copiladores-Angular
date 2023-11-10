import { PalavrasReservadas } from "../Reservadas";
import { ILocalVariableDeclaration } from "./ILocalVariableDeclaration";
import { IStatement } from "./IStatement";

export interface IBlockStatement {
    localVariableDeclaration: ILocalVariableDeclaration
    regra1: PalavrasReservadas.SEMICOLON
    statements: IStatement
}