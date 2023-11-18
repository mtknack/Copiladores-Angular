export const Tipo = {
  OP_ARITMETICO: 1,
  OP_ATRIBUICAO: 2,
  OP_COMPARACAO: 3,
  OP_LOGICO: 4,
  OP_BIT: 5,
  PONTUACAO: 6,
  RESERVADA: 7,
  IDENTIFICADOR_INVALIDO: 8,
  STRING: 9,
  IDENTIFICADOR_VALIDO: 10,
  NUMBER: 11,
};

export interface IToken {
  id?: Number;
  tipo: Number;
  textoOriginal: string;
  token: string;
  linha?: Number;
  coluna?: Number;
}
