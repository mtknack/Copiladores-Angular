import { IImportDeclaration } from "./IImportDeclaration"

export interface IImportDeclarations{
    regra1: IImportDeclaration | (IImportDeclarations & IImportDeclaration);
}
