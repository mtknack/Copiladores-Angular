import { IFieldMethodDeclaration } from "./IFieldMethodDeclaration";
import { IIdentifier } from "./IIdentifier";
import { IModifier } from "./IModifier";
import { IType } from "./IType";

export interface IClassBodyDeclaration{
    modifier: IModifier
    type: IType
    identifier: IIdentifier
    fieldMethodDeclaration: IFieldMethodDeclaration
}