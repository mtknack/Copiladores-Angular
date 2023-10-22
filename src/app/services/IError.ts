import { ITabela } from "./ITabela";

export interface IError {
    linha: Number;
    coluna: Number;
    tipoError: ITabela;
}
  