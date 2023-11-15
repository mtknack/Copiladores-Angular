import { PalavrasReservadas } from "../Reservadas";
import { IClassBodyDeclarations } from "./IClassBodyDeclarations";

export interface IClassBody{
    regra1: PalavrasReservadas.LEFT_BRACE
    classBodyDeclaration?: IClassBodyDeclarations
    regra2: PalavrasReservadas.RIGHT_BRACE
}