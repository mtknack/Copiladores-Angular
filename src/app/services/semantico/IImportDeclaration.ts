import { IIdentifier } from "./IIdentifier";
import { ReservadasEnum } from "../Reservadas";

export interface IImportDeclaration {
    regra1: ReservadasEnum.PalavrasReservadas.IMPORT;
    regra2: IIdentifier;
    regra3: ReservadasEnum.PalavrasReservadas.COLON;
}
