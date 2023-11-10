import { IBlock } from "./IBlock";
import { IMethodDeclarator } from "./IMethodDeclarator";

export interface IMethodDeclaration{
    methodDeclarator: IMethodDeclarator
    block: IBlock
}