import { Injectable } from '@angular/core';
import { ITabela, Tipo } from './ITabela';

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
      {
        textoOriginal: 'abstract',
        token: 'ABSTRACT',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'assert', token: 'ASSERT', tipo: Tipo.RESERVADA },
      { textoOriginal: 'boolean', token: 'BOOLEAN', tipo: Tipo.RESERVADA },
      { textoOriginal: 'break', token: 'BREAK', tipo: Tipo.RESERVADA },
      { textoOriginal: 'byte', token: 'BYTE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'case', token: 'CASE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'catch', token: 'CATCH', tipo: Tipo.RESERVADA },
      { textoOriginal: 'char', token: 'CHAR', tipo: Tipo.RESERVADA },
      { textoOriginal: 'class', token: 'CLASS', tipo: Tipo.RESERVADA },
      { textoOriginal: 'const', token: 'CONST', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'continue',
        token: 'CONTINUE',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'default', token: 'DEFAULT', tipo: Tipo.RESERVADA },
      { textoOriginal: 'do', token: 'DO', tipo: Tipo.RESERVADA },
      { textoOriginal: 'double', token: 'DOUBLE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'else', token: 'ELSE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'extends', token: 'EXTENDS', tipo: Tipo.RESERVADA },
      { textoOriginal: 'false', token: 'FALSE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'final', token: 'FINAL', tipo: Tipo.RESERVADA },
      { textoOriginal: 'finally', token: 'FINALLY', tipo: Tipo.RESERVADA },
      { textoOriginal: 'string', token: 'STRING', tipo: Tipo.RESERVADA },
      { textoOriginal: 'float', token: 'FLOAT', tipo: Tipo.RESERVADA },
      { textoOriginal: 'for', token: 'FOR', tipo: Tipo.RESERVADA },
      { textoOriginal: 'goto', token: 'GOTO', tipo: Tipo.RESERVADA },
      { textoOriginal: 'if', token: 'IF', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'implements',
        token: 'IMPLEMENTS',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'import', token: 'IMPORT', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'instanceof',
        token: 'INSTANCEOF',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'int', token: 'INT', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'interface',
        token: 'INTERFACE',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'long', token: 'LONG', tipo: Tipo.RESERVADA },
      { textoOriginal: 'native', token: 'NATIVE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'new', token: 'NEW', tipo: Tipo.RESERVADA },
      { textoOriginal: 'null', token: 'NULL', tipo: Tipo.RESERVADA },
      { textoOriginal: 'package', token: 'PACKAGE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'private', token: 'PRIVATE', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'protected',
        token: 'PROTECTED',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'public', token: 'PUBLIC', tipo: Tipo.RESERVADA },
      { textoOriginal: 'return', token: 'RETURN', tipo: Tipo.RESERVADA },
      { textoOriginal: 'short', token: 'SHORT', tipo: Tipo.RESERVADA },
      { textoOriginal: 'static', token: 'STATIC', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'strictfp',
        token: 'STRICTFP',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'super', token: 'SUPER', tipo: Tipo.RESERVADA },
      { textoOriginal: 'switch', token: 'SWITCH', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'synchronized',
        token: 'SYNCHRONIZED',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'this', token: 'THIS', tipo: Tipo.RESERVADA },
      { textoOriginal: 'throw', token: 'THROW', tipo: Tipo.RESERVADA },
      { textoOriginal: 'throws', token: 'THROWS', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'transient',
        token: 'TRANSIENT',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'true', token: 'TRUE', tipo: Tipo.RESERVADA },
      { textoOriginal: 'try', token: 'TRY', tipo: Tipo.RESERVADA },
      { textoOriginal: 'void', token: 'VOID', tipo: Tipo.RESERVADA },
      {
        textoOriginal: 'volatile',
        token: 'VOLATILE',
        tipo: Tipo.RESERVADA,
      },
      { textoOriginal: 'while', token: 'WHILE', tipo: Tipo.RESERVADA },
      { textoOriginal: '+', token: 'ADD', tipo: Tipo.OP_ARITMETICO },
      { textoOriginal: '-', token: 'SUBTRACT', tipo: Tipo.OP_ARITMETICO },
      { textoOriginal: '*', token: 'MULTIPLY', tipo: Tipo.OP_ARITMETICO },
      { textoOriginal: '/', token: 'DIVIDE', tipo: Tipo.OP_ARITMETICO },
      { textoOriginal: '%', token: 'MODULO', tipo: Tipo.OP_ARITMETICO },
      {
        textoOriginal: '++',
        token: 'INCREMENT',
        tipo: Tipo.OP_ARITMETICO,
      },
      {
        textoOriginal: '--',
        token: 'DECREMENT',
        tipo: Tipo.OP_ARITMETICO,
      },
      { textoOriginal: '=', token: 'ASSIGN', tipo: Tipo.OP_ATRIBUICAO },
      {
        textoOriginal: '+=',
        token: 'ADD_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '-=',
        token: 'SUBTRACT_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '*=',
        token: 'MULTIPLY_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '/=',
        token: 'DIVIDE_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '%=',
        token: 'MODULO_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '<<=',
        token: 'LEFT_SHIFT_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '>>=',
        token: 'RIGHT_SHIFT_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '>>>=',
        token: 'UNSIGNED_RIGHT_SHIFT_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '&=',
        token: 'AND_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '|=',
        token: 'OR_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      {
        textoOriginal: '^=',
        token: 'XOR_ASSIGN',
        tipo: Tipo.OP_ATRIBUICAO,
      },
      { textoOriginal: '==', token: 'EQUALS', tipo: Tipo.OP_COMPARACAO },
      {
        textoOriginal: '!=',
        token: 'NOT_EQUALS',
        tipo: Tipo.OP_COMPARACAO,
      },
      { textoOriginal: '<', token: 'LESS_THAN', tipo: Tipo.OP_COMPARACAO },
      {
        textoOriginal: '>',
        token: 'GREATER_THAN',
        tipo: Tipo.OP_COMPARACAO,
      },
      {
        textoOriginal: '<=',
        token: 'LESS_THAN_OR_EQUALS',
        tipo: Tipo.OP_COMPARACAO,
      },
      {
        textoOriginal: '>=',
        token: 'GREATER_THAN_OR_EQUALS',
        tipo: Tipo.OP_COMPARACAO,
      },
      { textoOriginal: '&&', token: 'LOGICAL_AND', tipo: Tipo.OP_LOGICO },
      { textoOriginal: '||', token: 'LOGICAL_OR', tipo: Tipo.OP_LOGICO },
      { textoOriginal: '!', token: 'LOGICAL_NOT', tipo: Tipo.OP_LOGICO },
      { textoOriginal: ';', token: 'SEMICOLON', tipo: Tipo.PONTUACAO },
      { textoOriginal: ',', token: 'COMMA', tipo: Tipo.PONTUACAO },
      { textoOriginal: '.', token: 'PERIOD', tipo: Tipo.PONTUACAO },
      {
        textoOriginal: '(',
        token: 'LEFT_PARENTHESIS',
        tipo: Tipo.PONTUACAO,
      },
      {
        textoOriginal: ')',
        token: 'RIGHT_PARENTHESIS',
        tipo: Tipo.PONTUACAO,
      },
      { textoOriginal: '{', token: 'LEFT_BRACE', tipo: Tipo.PONTUACAO },
      { textoOriginal: '}', token: 'RIGHT_BRACE', tipo: Tipo.PONTUACAO },
      { textoOriginal: '[', token: 'LEFT_BRACKET', tipo: Tipo.PONTUACAO },
      { textoOriginal: ']', token: 'RIGHT_BRACKET', tipo: Tipo.PONTUACAO },
      { textoOriginal: ':', token: 'COLON', tipo: Tipo.PONTUACAO },
    ];
  }

  public buscaReservadas(token: string): ITabela | null {
    const reservada = this.reservadas.find((op) => op.textoOriginal === token);
    return reservada ? reservada : null;
  }
}
