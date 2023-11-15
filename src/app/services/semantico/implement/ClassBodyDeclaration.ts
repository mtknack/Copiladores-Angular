import { Injectable } from "@angular/core";
import { PalavrasReservadas } from "../../Reservadas";
import { ObjectService } from "../Objetcs/ObjectService";
import { ImportsDeclarationImpl } from "./ImportsDeclarationImpl";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { Modifier } from "./Modifier";
import { IdentifierImpl } from "./IdentifierImpl";
import { Type } from "./Type";
import { FieldMethodDeclarations } from './FieldMethodDeclarations';


@Injectable({
    providedIn: 'root',
})
export class ClassBodyDeclaration implements ILog {

    constructor(
        private objectService: ObjectService,
				private modifier: Modifier,
				private identifier: IdentifierImpl,
				private type: Type,
				private fieldMethodDeclarations : FieldMethodDeclarations 
    ){

    }

    message(): IObjectLog {
        return {
            analise: "ClassBodyDeclaration Declarations",
            status: true
        }
    }

		// <classBodyDeclaration> → <Modifiers>?<Type><identifier><fieldMethodDeclaration>
		// TODO: fazer para rodar mais de uma vez aqui dentro sem ficar em um loop infinito
    processar(){

        if(this.modifier.processar()){
					this.objectService.skipIndex();
				}

				if(!this.type.processar()){
					return false;
				}
				this.objectService.skipIndex();

				if(!this.identifier.processar()){
					return false;
				}
				this.objectService.skipIndex();

				if(!this.fieldMethodDeclarations.processar()){
					return false;
				}
				
				return true;
    }

}