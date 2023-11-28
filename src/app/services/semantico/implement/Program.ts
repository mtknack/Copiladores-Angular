import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { Identifier } from "./Identifier";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { PackageDeclaration } from "./PackageDeclaration";
import { ImportDeclarations } from "./ImportDeclarations";
import { ClassDeclaration } from "./ClassDeclaration";
import { ImportDeclaration } from "./ImportDeclaration";
import { Modifier } from "./Modifier";
import { ClassModifier } from "./ClassModifier";


@Injectable({
    providedIn: 'root',
})
export class Program implements ILog{

    constructor(
        private packageDeclaration: PackageDeclaration,
        private importDeclaration: ImportDeclaration,
        private importDeclarations: ImportDeclarations,
        private classDeclaration: ClassDeclaration,
        private objectService: ObjectService,
        private classModifier: ClassModifier
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

            this.objectService.expecteds = []
            
            let regra1 = [this.packageDeclaration]
            let regra2 = [this.importDeclarations]
            let regra3 = [this.classDeclaration]

            // if(this.objectService.getObjectAtualToken() == PalavrasReservadas.PACKAGE){
            //     this.objectService.validaRegras([regra1])
            // }
            // if(this.objectService.getObjectAtualToken() == PalavrasReservadas.IMPORT){
            //     this.objectService.validaRegras([regra2])
            // }
            if(this.objectService.validaPalavrasReservadas(this.classModifier)){
                this.objectService.validaRegras([regra3])
            }

            throw Error(``)
        }catch(err: any){
            let esperados = this.objectService.expecteds
            console.log(esperados)
            let msg = '';
            if(esperados.length === 0){
                return Error(``)
            }else{
                msg = "Esperando "
                for (let i = 0; i < esperados.length-1; i++) {
                    const esperado = esperados[i];
                    msg += '"'+esperado.vetor+'"['+ esperado.linha+','+ esperado.coluna+'], '
                }
                const esperado = esperados[esperados.length-1];
                    msg += '"'+esperado.vetor+'"['+ esperado.linha+','+ esperado.coluna+']';
            }
            console.log(msg)
            return Error(msg)
            // return err
        }

        

        // if(retorno)
        //     return true

        // return false
    }

}

//PROCESSANDO
//regra -> IMPORT <IDENTIFIER> ; | IMPORT <TYPEMODIFIER> ;
// VERDADEIRO FALSO
