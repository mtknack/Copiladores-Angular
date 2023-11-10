import { PalavrasReservadas } from "../Reservadas";
import { IFormalParameterList } from "./IFormalParameterList";

export interface IMethodDeclarator{
    regra1: PalavrasReservadas.LEFT_PARENTHESIS
    formalParameterList: IFormalParameterList
    regra2: PalavrasReservadas.RIGHT_PARENTHESIS
}