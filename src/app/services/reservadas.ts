import { Injectable } from '@angular/core';

interface ChaveValor {
    token: string,
    valor: string
}

@Injectable({
    providedIn: 'root' // Este serviço será injetado em toda a aplicação
})
export class Reservadas {

    private reservadas: ChaveValor[] = [];

    constructor() {
        this.inicializareservadas()
    }

    private inicializareservadas() {
        this.reservadas = [
            { token: "abstract", valor: "ABSTRACT" },
            { token: "assert", valor: "ASSERT" },
            { token: "boolean", valor: "BOOLEAN" },
            { token: "break", valor: "BREAK" },
            { token: "byte", valor: "BYTE" },
            { token: "case", valor: "CASE" },
            { token: "catch", valor: "CATCH" },
            { token: "char", valor: "CHAR" },
            { token: "class", valor: "CLASS" },
            { token: "const", valor: "CONST" },
            { token: "continue", valor: "CONTINUE" },
            { token: "default", valor: "DEFAULT" },
            { token: "do", valor: "DO" },
            { token: "double", valor: "DOUBLE" },
            { token: "else", valor: "ELSE" },
            { token: "extends", valor: "EXTENDS" },
            { token: "false", valor: "FALSE" },
            { token: "final", valor: "FINAL" },
            { token: "finally", valor: "FINALLY" },
            { token: "float", valor: "FLOAT" },
            { token: "for", valor: "FOR" },
            { token: "goto", valor: "GOTO" },
            { token: "if", valor: "IF" },
            { token: "implements", valor: "IMPLEMENTS" },
            { token: "import", valor: "IMPORT" },
            { token: "instanceof", valor: "INSTANCEOF" },
            { token: "int", valor: "INT" },
            { token: "interface", valor: "INTERFACE" },
            { token: "long", valor: "LONG" },
            { token: "native", valor: "NATIVE" },
            { token: "new", valor: "NEW" },
            { token: "null", valor: "NULL" },
            { token: "package", valor: "PACKAGE" },
            { token: "private", valor: "PRIVATE" },
            { token: "protected", valor: "PROTECTED" },
            { token: "public", valor: "PUBLIC" },
            { token: "return", valor: "RETURN" },
            { token: "short", valor: "SHORT" },
            { token: "static", valor: "STATIC" },
            { token: "strictfp", valor: "STRICTFP" },
            { token: "super", valor: "SUPER" },
            { token: "switch", valor: "SWITCH" },
            { token: "synchronized", valor: "SYNCHRONIZED" },
            { token: "this", valor: "THIS" },
            { token: "throw", valor: "THROW" },
            { token: "throws", valor: "THROWS" },
            { token: "transient", valor: "TRANSIENT" },
            { token: "true", valor: "TRUE" },
            { token: "try", valor: "TRY" },
            { token: "void", valor: "VOID" },
            { token: "volatile", valor: "VOLATILE" },
            { token: "while", valor: "WHILE" },
            { token: "+", valor: "ADD" },
            { token: "-", valor: "SUBTRACT" },
            { token: "*", valor: "MULTIPLY" },
            { token: "/", valor: "DIVIDE" },
            { token: "%", valor: "MODULO" },
            { token: "++", valor: "INCREMENT" },
            { token: "--", valor: "DECREMENT" },
            { token: "=", valor: "ASSIGN" },
            { token: "+=", valor: "ADD_ASSIGN" },
            { token: "-=", valor: "SUBTRACT_ASSIGN" },
            { token: "*=", valor: "MULTIPLY_ASSIGN" },
            { token: "/=", valor: "DIVIDE_ASSIGN" },
            { token: "%=", valor: "MODULO_ASSIGN" },
            { token: "<<=", valor: "LEFT_SHIFT_ASSIGN" },
            { token: ">>=", valor: "RIGHT_SHIFT_ASSIGN" },
            { token: ">>>=", valor: "UNSIGNED_RIGHT_SHIFT_ASSIGN" },
            { token: "&=", valor: "AND_ASSIGN" },
            { token: "|=", valor: "OR_ASSIGN" },
            { token: "^=", valor: "XOR_ASSIGN" },
            { token: "==", valor: "EQUALS" },
            { token: "!=", valor: "NOT_EQUALS" },
            { token: "<", valor: "LESS_THAN" },
            { token: ">", valor: "GREATER_THAN" },
            { token: "<=", valor: "LESS_THAN_OR_EQUALS" },
            { token: ">=", valor: "GREATER_THAN_OR_EQUALS" },
            { token: "&&", valor: "LOGICAL_AND" },
            { token: "||", valor: "LOGICAL_OR" },
            { token: "!", valor: "LOGICAL_NOT" },
            { token: ";", valor: "SEMICOLON" },
            { token: ",", valor: "COMMA" },
            { token: ".", valor: "PERIOD" },
            { token: "(", valor: "LEFT_PARENTHESIS" },
            { token: ")", valor: "RIGHT_PARENTHESIS" },
            { token: "{", valor: "LEFT_BRACE" },
            { token: "}", valor: "RIGHT_BRACE" },
            { token: "[", valor: "LEFT_BRACKET" },
            { token: "]", valor: "RIGHT_BRACKET" },
            { token: ":", valor: "COLON" }
        ]
    }


    public buscaReservadas(token: string): string {
        const reservada = this.reservadas.find(op => op.token === token);
        return reservada ? reservada.valor : 'N/A';
    }

}
