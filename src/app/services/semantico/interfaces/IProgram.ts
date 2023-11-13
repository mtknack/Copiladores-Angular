import { IPackageDeclaration } from "./IPackageDeclaration"
import { IImportDeclarations } from "./IImportDeclarations";
import { IClassDeclaration } from "./IClassDeclaration";

export interface IProgram {
    regra1?: IPackageDeclaration;
    regra2?: IImportDeclarations;
    regra3?: IClassDeclaration;
}