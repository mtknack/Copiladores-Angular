import { IToken } from "../../Interfaces"
import { Arvore } from "./Arvore"

export interface IObjectInfo{
    tokens: IToken[]
    atual: number
    arvore: Arvore
    ultimoErro?: number
}

// [`PACKAGE`,`TAL`,`;`,`IMPORT`, `IDENTIFICADOR`, `;` ]
// [`PACKAGE`,`TAL`,`;`,`IMPORT`, `IDENTIFICADOR`, `,` ]

// ATUAL = 5