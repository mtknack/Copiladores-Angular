import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ImportDeclaration } from "./ImportDeclaration";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Tipo } from "../../Interfaces";


@Injectable({
    providedIn: 'root',
})
export class ImportDeclarations implements ILog {

    constructor(
        private importDeclaration: ImportDeclaration,
        private objectService: ObjectService,
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

        
        let regra1 = [this, this.importDeclaration]
        let regra2 = [this.importDeclaration]

        
        try{
            // this.objectService.validaRegra(regra1,[])
            throw "Validar com o professor de como parar a recursão"
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