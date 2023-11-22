import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { Identifier } from "./Identifier";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { PackageDeclaration } from "./PackageDeclaration";
import { ImportDeclarations } from "./ImportDeclarations";
import { ClassDeclaration } from "./ClassDeclaration";
import { ImportDeclaration } from "./ImportDeclaration";


@Injectable({
    providedIn: 'root',
})
export class Program implements ILog{

    constructor(
        private packageDeclaration: PackageDeclaration,
        private importDeclaration:ImportDeclaration,
        private importDeclarations:ImportDeclarations,
        // private classDeclaration:ClassDeclaration,
        private objectService: ObjectService,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Import Declaration",
            status: true
        }
    }

    processar(): any{
        try{
            console.clear()
            // let regra1 = [this.packageDeclaration, this.importDeclaration,this.classDeclaration]
            let regra1 = [this.packageDeclaration, this.importDeclarations,]
            let regra2 = [this.importDeclarations,]
            let regra3 = [this.packageDeclaration,]
            // let regra2 = [this.packageDeclaration, this.importDeclaration,this.importDeclaration,this.importDeclaration]
            // let regras:any[] = []
            // regras.push(regra1)
            // this.objectService.validaRegras(regras)
            this.objectService.validaRegras([regra1])
            return Error(``)
        }catch(err: any){
            console.log(err)
            return err
        }
        

        // if(retorno)
        //     return true

        // return false
    }

}

//PROCESSANDO
//regra -> IMPORT <IDENTIFIER> ; | IMPORT <TYPEMODIFIER> ;
// VERDADEIRO FALSO
