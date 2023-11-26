import { Injectable } from "@angular/core";
import { ObjectService } from "../Objetcs/ObjectService";
import { ILog, IObjectLog } from "../Objetcs/Log";
import { ClassBodyDeclaration } from "./ClassBodyDeclaration";
import { ClassModifier } from "./ClassModifier";
import { Type } from "./Type";
import { Identifier } from "./Identifier";
import { FieldMethodDeclaration } from "./FieldMethodDeclaration";
import { Modifier } from "./Modifier";
import { PalavrasReservadas } from "../../Reservadas";


@Injectable({
  providedIn: 'root',
})
export class ClassBodyDeclarations implements ILog {

  constructor(
    private objectService: ObjectService,
    private modifier: Modifier,
    private type: Type,
    private identifier: Identifier,
    private fieldMethodDeclaration: FieldMethodDeclaration
  ) {

  }

  message(): IObjectLog {
    return {
      analise: "ClassBodyDeclarations",
      status: true
    }
  }

  processar() {

    var regra1 = [this.modifier, this.type, this.identifier, this.fieldMethodDeclaration]

    try {

      this.objectService.validaRegras(regra1)
      if(
        this.modifier.getModifier(this.objectService.getObjectAtualToken())
      ){
        this.objectService.validaRegras([this])
      }

    } catch (error) {
      
    }
    

  }
}