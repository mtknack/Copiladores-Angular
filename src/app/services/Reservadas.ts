import { Injectable } from '@angular/core';
import {ITabela, ITipo} from './ITabela';

@Injectable({
  providedIn: 'root', // Este serviço será injetado em toda a aplicação
})
export class Reservadas {
  private reservadas: ITabela[] = [];

  constructor() {
    this.inicializareservadas();
  }

  private inicializareservadas() {
    this.reservadas = [
      { textoOriginal: 'abstract', token: 'ABSTRACT', tipo:ITipo.RESERVADA},
      { textoOriginal: 'assert', token: 'ASSERT', tipo:ITipo.RESERVADA },
      { textoOriginal: 'boolean', token: 'BOOLEAN', tipo:ITipo.RESERVADA },
      { textoOriginal: 'break', token: 'BREAK', tipo:ITipo.RESERVADA },
      { textoOriginal: 'byte', token: 'BYTE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'case', token: 'CASE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'catch', token: 'CATCH', tipo:ITipo.RESERVADA },
      { textoOriginal: 'char', token: 'CHAR', tipo:ITipo.RESERVADA },
      { textoOriginal: 'class', token: 'CLASS', tipo:ITipo.RESERVADA },
      { textoOriginal: 'const', token: 'CONST', tipo:ITipo.RESERVADA },
      { textoOriginal: 'continue', token: 'CONTINUE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'default', token: 'DEFAULT', tipo:ITipo.RESERVADA },
      { textoOriginal: 'do', token: 'DO', tipo:ITipo.RESERVADA },
      { textoOriginal: 'double', token: 'DOUBLE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'else', token: 'ELSE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'extends', token: 'EXTENDS', tipo:ITipo.RESERVADA },
      { textoOriginal: 'false', token: 'FALSE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'final', token: 'FINAL', tipo:ITipo.RESERVADA },
      { textoOriginal: 'finally', token: 'FINALLY', tipo:ITipo.RESERVADA },
      { textoOriginal: 'string', token: 'STRING', tipo:ITipo.RESERVADA },
      { textoOriginal: 'float', token: 'FLOAT', tipo:ITipo.RESERVADA },
      { textoOriginal: 'for', token: 'FOR', tipo:ITipo.RESERVADA },
      { textoOriginal: 'goto', token: 'GOTO', tipo:ITipo.RESERVADA },
      { textoOriginal: 'if', token: 'IF', tipo:ITipo.RESERVADA },
      { textoOriginal: 'implements', token: 'IMPLEMENTS', tipo:ITipo.RESERVADA },
      { textoOriginal: 'import', token: 'IMPORT', tipo:ITipo.RESERVADA },
      { textoOriginal: 'instanceof', token: 'INSTANCEOF', tipo:ITipo.RESERVADA },
      { textoOriginal: 'int', token: 'INT', tipo:ITipo.RESERVADA },
      { textoOriginal: 'interface', token: 'INTERFACE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'long', token: 'LONG', tipo:ITipo.RESERVADA },
      { textoOriginal: 'native', token: 'NATIVE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'new', token: 'NEW', tipo:ITipo.RESERVADA },
      { textoOriginal: 'null', token: 'NULL', tipo:ITipo.RESERVADA },
      { textoOriginal: 'package', token: 'PACKAGE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'private', token: 'PRIVATE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'protected', token: 'PROTECTED', tipo:ITipo.RESERVADA },
      { textoOriginal: 'public', token: 'PUBLIC', tipo:ITipo.RESERVADA },
      { textoOriginal: 'return', token: 'RETURN', tipo:ITipo.RESERVADA },
      { textoOriginal: 'short', token: 'SHORT', tipo:ITipo.RESERVADA },
      { textoOriginal: 'static', token: 'STATIC', tipo:ITipo.RESERVADA },
      { textoOriginal: 'strictfp', token: 'STRICTFP', tipo:ITipo.RESERVADA },
      { textoOriginal: 'super', token: 'SUPER', tipo:ITipo.RESERVADA },
      { textoOriginal: 'switch', token: 'SWITCH', tipo:ITipo.RESERVADA },
      { textoOriginal: 'synchronized', token: 'SYNCHRONIZED', tipo:ITipo.RESERVADA },
      { textoOriginal: 'this', token: 'THIS', tipo:ITipo.RESERVADA },
      { textoOriginal: 'throw', token: 'THROW', tipo:ITipo.RESERVADA },
      { textoOriginal: 'throws', token: 'THROWS', tipo:ITipo.RESERVADA },
      { textoOriginal: 'transient', token: 'TRANSIENT', tipo:ITipo.RESERVADA },
      { textoOriginal: 'true', token: 'TRUE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'try', token: 'TRY', tipo:ITipo.RESERVADA },
      { textoOriginal: 'void', token: 'VOID', tipo:ITipo.RESERVADA },
      { textoOriginal: 'volatile', token: 'VOLATILE', tipo:ITipo.RESERVADA },
      { textoOriginal: 'while', token: 'WHILE', tipo:ITipo.RESERVADA },
      { textoOriginal: '+', token: 'ADD', tipo:ITipo.OP_ARITMETICO },
      { textoOriginal: '-', token: 'SUBTRACT', tipo:ITipo.OP_ARITMETICO },
      { textoOriginal: '*', token: 'MULTIPLY', tipo:ITipo.OP_ARITMETICO },
      { textoOriginal: '/', token: 'DIVIDE', tipo:ITipo.OP_ARITMETICO },
      { textoOriginal: '%', token: 'MODULO', tipo:ITipo.OP_ARITMETICO },
      { textoOriginal: '++', token: 'INCREMENT', tipo:ITipo.OP_ARITMETICO },
      { textoOriginal: '--', token: 'DECREMENT', tipo:ITipo.OP_ARITMETICO },
      { textoOriginal: '=', token: 'ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '+=', token: 'ADD_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '-=', token: 'SUBTRACT_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '*=', token: 'MULTIPLY_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '/=', token: 'DIVIDE_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '%=', token: 'MODULO_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '<<=', token: 'LEFT_SHIFT_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '>>=', token: 'RIGHT_SHIFT_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '>>>=', token: 'UNSIGNED_RIGHT_SHIFT_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '&=', token: 'AND_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '|=', token: 'OR_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '^=', token: 'XOR_ASSIGN', tipo:ITipo.OP_ATRIBUICAO },
      { textoOriginal: '==', token: 'EQUALS', tipo:ITipo.OP_COMPARACAO },
      { textoOriginal: '!=', token: 'NOT_EQUALS', tipo:ITipo.OP_COMPARACAO },
      { textoOriginal: '<', token: 'LESS_THAN', tipo:ITipo.OP_COMPARACAO },
      { textoOriginal: '>', token: 'GREATER_THAN', tipo:ITipo.OP_COMPARACAO },
      { textoOriginal: '<=', token: 'LESS_THAN_OR_EQUALS', tipo:ITipo.OP_COMPARACAO },
      { textoOriginal: '>=', token: 'GREATER_THAN_OR_EQUALS', tipo:ITipo.OP_COMPARACAO },
      { textoOriginal: '&&', token: 'LOGICAL_AND', tipo:ITipo.OP_LOGICO },
      { textoOriginal: '||', token: 'LOGICAL_OR', tipo:ITipo.OP_LOGICO },
      { textoOriginal: '!', token: 'LOGICAL_NOT', tipo:ITipo.OP_LOGICO },
      { textoOriginal: ';', token: 'SEMICOLON', tipo:ITipo.PONTUACAO },
      { textoOriginal: ',', token: 'COMMA', tipo:ITipo.PONTUACAO },
      { textoOriginal: '.', token: 'PERIOD', tipo:ITipo.PONTUACAO },
      { textoOriginal: '(', token: 'LEFT_PARENTHESIS', tipo:ITipo.PONTUACAO },
      { textoOriginal: ')', token: 'RIGHT_PARENTHESIS', tipo:ITipo.PONTUACAO },
      { textoOriginal: '{', token: 'LEFT_BRACE', tipo:ITipo.PONTUACAO },
      { textoOriginal: '}', token: 'RIGHT_BRACE', tipo:ITipo.PONTUACAO },
      { textoOriginal: '[', token: 'LEFT_BRACKET', tipo:ITipo.PONTUACAO },
      { textoOriginal: ']', token: 'RIGHT_BRACKET', tipo:ITipo.PONTUACAO },
      { textoOriginal: ':', token: 'COLON', tipo:ITipo.PONTUACAO },
    ];
  }

  public buscaReservadas(token: string): ITabela {
    const reservada = this.reservadas.find((op) => op.token === token);
    return reservada ? reservada : null;
  }
}
