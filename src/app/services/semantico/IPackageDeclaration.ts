import { ReservadasEnum } from "../Reservadas";
import { IIdentifier } from "./IIdentifier"

export interface IPackageDeclaration{
    regra1: ReservadasEnum.PalavrasReservadas.PACKAGE;
    regra2: IIdentifier;
    regra3: ReservadasEnum.PalavrasReservadas.COLON;
}