import { ReservadasEnum } from "../Reservadas"
import { IClassBody } from "./IClassBody"
import { IClassModifier } from "./IClassModifier"
import { IIdentifier } from "./IIdentifier"
export interface IClassDeclaration {
    regra1: IClassModifier
    regra2: ReservadasEnum.PalavrasReservadas.CLASS
    regra3: IIdentifier
    // regra4: IClassBody
}