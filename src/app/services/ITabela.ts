interface ITipo {
    OP_ARITMETICO: 1,
    OP_ATRIBUICAO: 2,
    OP_COMPARACAO: 3,
    OP_LOGICO: 4,
    OP_BIT: 5,
    PONTUACAO: 6,
    RESERVADA:7,
    IDENTIFICADOR_INVALIDO: 8,
}

interface ITabela {
    id?:Number,
    tipo: ITipo,
    textoOriginal:string,
    token:string,
}