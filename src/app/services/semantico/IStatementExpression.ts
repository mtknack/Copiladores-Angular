import { IAssignment } from "./IAssignment";
import { ILabelStatement } from "./ILabeledStatement";
import { IMethodInvocation } from "./IMethodInvocation";

export interface IStatementExpression{
    assignment: IAssignment
    methodInvocation: IMethodInvocation
    labelStatement : ILabelStatement
}