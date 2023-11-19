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
            let regra1 = [this.packageDeclaration, this.importDeclarations]//this.classDeclaration
            console.clear()
            // this.objectService.validaRegra(regra1)
            const vetor = [1, 2, 3];
            
            // Exemplo de uso
            const vetorObjetos = [{ nome: 'obj1' }, { nome: 'obj2' }, { nome: 'obj3' }];
            const vetorOpcionais = [0, 1];
            
            const combinacoes = this.objectService.gerarCombinacoes(vetorObjetos, vetorOpcionais);
            
            console.log(combinacoes);
          
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
