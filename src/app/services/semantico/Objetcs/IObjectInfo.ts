import { ITabela } from "../../ITabela"
import { Arvore } from "./Arvore"

export interface IObjectInfo{
    tokens: [ITabela]
    atual: number
    arvore: Arvore
}