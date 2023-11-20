import { Injectable } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ClassBodyDeclaration } from "./ClassBodyDeclaration";


@Injectable({
    providedIn: 'root',
})
export class ClassBodyDeclarations implements ILog {

    constructor(
        private objectService: ObjectService,
				private classBodyDeclaration: ClassBodyDeclaration
				// private fieldMethodDeclarations : FieldMethodDeclarations 
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclarations Declarations",
            status: true
        }
    }

		// Regra: <classBodyDeclarations> → <classBodyDeclaration> | <classBodyDeclarations> <classBodyDeclaration>
    processar(){
      let regra1 = [this.classBodyDeclaration]
      this.objectService.validaRegra(regra1)
		// TODO: fazer para rodar mais de uma vez aqui dentro sem ficar em um loop infinito

    }

}