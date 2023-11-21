import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ImportDeclaration } from "./ImportDeclaration";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Tipo } from "../../Interfaces";
import { ClassDeclaration } from "./ClassDeclaration";


@Injectable({
    providedIn: 'root',
})
export class ImportDeclarations implements ILog {

    constructor(
        private importDeclaration: ImportDeclaration,
        private objectService: ObjectService,
        private classDeclaration: ClassDeclaration,
    ){

    }

    message(): IObjectLog {
        return {
            analise: "Import Declarations",
            status: true
        }
    }

    // <importDeclarations> → <importDeclaration> | <importDeclarations> <importDeclaration>
    processar(){
        let regra1 = [this.importDeclaration]
        let regra2 = [this, this.importDeclaration]

        
        try{
            // this.objectService.validaRegra(regra1,[])
            // throw "Validar com o professor de como parar a recursão"
            this.objectService.validaRegra(regra1)
        }
        catch(erro1){
            try{
                this.objectService.validaRegra(regra2)
            }
            catch(erro2){
                throw erro2
            }
            // verificar qual ods erros kancar
            
        }
    }

}