import { PalavrasReservadas } from "../Reservadas";
import { IBlock } from "./IBlock";
import { IBreakStatement } from "./IBreakStatement";
import { IClassInstanceCreationExpression } from "./IClassInstanceCreationExpression";
import { IContinueStatement } from "./IContinueStatement";
import { IDoStatement } from "./IDoStatement";
import { IEmptyStatement } from "./IEmptyStatement";
import { IIdentifier } from "./IIdentifier";
import { IIfStatement } from "./IIfStatement";
import { IReturnStatement } from "./IReturnStatement";
import { IStatementExpression } from "./IStatementExpression";
import { ITryStatement } from "./ITryStatement";
import { IWhileStatement } from "./IWhileStatement";

export interface IStatement{
    block: IBlock
    emptyStatement: IEmptyStatement
    identifier: IIdentifier
    statementExpression: IStatementExpression
    regra1: PalavrasReservadas.SEMICOLON
    doStatement: IDoStatement
    breakStatement: IBreakStatement
    continueStatement: IContinueStatement
    returnStatement: IReturnStatement
    ifStatement: IIfStatement
    whileStatement: IWhileStatement
    tryStatement: ITryStatement
    classInstanceCreationExpression: IClassInstanceCreationExpression
}