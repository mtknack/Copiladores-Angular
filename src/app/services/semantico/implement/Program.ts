import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { IdentifierImpl } from "./IdentifierImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { PackageDeclarationImpl } from "./PackageDeclarationImpl";
import { ImportDeclarations } from "./ImportDeclarations";
import { ClassDeclaration } from "./ClassDeclaration";


@Injectable({
    providedIn: 'root',
})
export class Program implements ILog{

    constructor(
        private packageDeclarationImpl: PackageDeclarationImpl,
        private importDeclarations:ImportDeclarations,
        private classDeclaration:ClassDeclaration,
        private objectService: ObjectService,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Import Declaration",
            status: true
        }
    }

    processar(){
        // let regra1 = [this.packageDeclarationImpl, this.importDeclarations, this.classDeclaration]
        let regra1 = [this.packageDeclarationImpl]
        let retorno = this.objectService.validaRegra(regra1,[0])

        if(retorno)
            return true

        return false
    }

}

//PROCESSANDO
//regra -> IMPORT <IDENTIFIER> ; | IMPORT <TYPEMODIFIER> ;
// VERDADEIRO FALSO
