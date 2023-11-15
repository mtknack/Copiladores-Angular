import { PalavrasReservadas } from "../Reservadas";
import { IIdentifier } from "./IIdentifier";

export interface IImportDeclaration{
    regra1: PalavrasReservadas.IMPORT
    identifier: IIdentifier
}