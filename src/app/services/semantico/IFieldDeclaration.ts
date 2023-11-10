import { PalavrasReservadas } from "../Reservadas";
import { IVariableDeclarators } from "./IVariableDeclarators";

export interface IFieldDeclaration{
    variableDeclarators: IVariableDeclarators
    regra1: PalavrasReservadas.SEMICOLON
}