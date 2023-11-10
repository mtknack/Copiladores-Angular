import { IIdentifier } from "./IIdentifier";
import { IType } from "./IType";
import { IVariableDeclarators } from "./IVariableDeclarators";

export interface ILocalVariableDeclaration{
    type: IType
    identifier: IIdentifier
    variableDeclarators: IVariableDeclarators
}