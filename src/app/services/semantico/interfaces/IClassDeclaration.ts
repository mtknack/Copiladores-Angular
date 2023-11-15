import { PalavrasReservadas } from "../Reservadas"
import { IClassBody } from "./IClassBody"
import { IClassModifier } from "./IClassModifier"
import { IIdentifier } from "./IIdentifier"
export interface IClassDeclaration {
    classModifier?: IClassModifier
    regra1: PalavrasReservadas.CLASS
    identifier: IIdentifier
    classBody: IClassBody
}