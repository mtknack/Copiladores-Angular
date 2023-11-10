import { IPackageDeclaration } from "./IPackageDeclaration"
import { IImportDeclarations } from "./IImportDeclarations";
import { IClassDeclaration } from "./IClassDeclaration";

export interface IProgram {
    packageDeclaration?: IPackageDeclaration;
    importDeclarations?: IImportDeclarations;
    classDeclaration?: IClassDeclaration;
}