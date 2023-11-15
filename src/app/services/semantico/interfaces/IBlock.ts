import { PalavrasReservadas } from "../Reservadas";
import { IBlockStatements } from "./IBlockStatements";

export interface IBlock {
    regra1: PalavrasReservadas.LEFT_BRACE
    blockStatements: IBlockStatements
    regra2: PalavrasReservadas.RIGHT_BRACE
}