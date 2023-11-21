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
        try{
            console.clear()
            let regra1 = [this.packageDeclaration, this.importDeclarations]//this.classDeclaration
            this.objectService.validaRegra(regra1)
            
            
          
        }catch(err){
            console.log(false)
            // console.log(err)
        }
        

        // if(retorno)
        //     return true

        // return false
    }

}

//PROCESSANDO
//regra -> IMPORT <IDENTIFIER> ; | IMPORT <TYPEMODIFIER> ;
// VERDADEIRO FALSO
