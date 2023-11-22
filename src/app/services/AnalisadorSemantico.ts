import { Injectable } from '@angular/core';
import { IToken, Tipo } from './Interfaces';
import { ObjectService } from './semantico/Objetcs/ObjectService';
import { PackageDeclaration } from './semantico/implement/PackageDeclaration';
import { ImportDeclarations } from './semantico/implement/ImportDeclarations';
import { Program } from './semantico/implement/Program';

@Injectable({
  providedIn: 'root',
})
export class AnalizadorSemantico {

  constructor(
    private objectService: ObjectService,
    private program:Program,
  ){
  }

  initializeVariables(vetorTokens: IToken[]): any{
    if(vetorTokens != null){
      this.objectService.newObject(vetorTokens as IToken[]);
      return this.startProcess()
    }
  }

  async startProcess(){
    
    return this.program.processar() 
    
  }
}
