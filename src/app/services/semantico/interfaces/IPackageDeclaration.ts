import { PalavrasReservadas } from "../../Reservadas";
import { IIdentifier } from "./IIdentifier"

export interface IPackageDeclaration {
    regra1: PalavrasReservadas.PACKAGE;
    identifier: IIdentifier;
    regra2: PalavrasReservadas.COLON;
}