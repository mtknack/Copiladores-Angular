import { ReservadasEnum } from "../Reservadas";

export interface IClassModifier {
    regra1: ReservadasEnum.PalavrasReservadas.PUBLIC | ReservadasEnum.PalavrasReservadas.ABSTRACT | ReservadasEnum.PalavrasReservadas.FINAL
    processar(a: any): any
}