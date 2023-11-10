import { PalavrasReservadas } from "../Reservadas";
import { IFormalParameter } from "./IFormalParameter";

export interface IFormalParameterList{
    formalParameter: IFormalParameter
    formalParameterList: IFormalParameterList
    regra1: PalavrasReservadas.COMMA
}