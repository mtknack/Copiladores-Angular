import { PalavrasReservadas } from "../Reservadas";
import { IIdentifier } from "./IIdentifier";
import { IVariableDeclarator } from "./IVariableDeclarator";

export interface IVariableDeclarators{
    variableDeclarator: IVariableDeclarator
    regra1: PalavrasReservadas.COMMA
    identifier: IIdentifier
    regra2: PalavrasReservadas.EPSON
}