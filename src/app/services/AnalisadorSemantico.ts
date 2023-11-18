import { Injectable } from '@angular/core';
import { IToken, Tipo } from './Interfaces';
import { ObjectService } from './semantico/Objetcs/ObjectService';
import { PackageDeclarationImpl } from './semantico/implement/PackageDeclarationImpl';
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

  initializeVariables(vetorTokens: IToken[]){
    if(vetorTokens != null){
      this.objectService.newObject(vetorTokens as IToken[]);
      this.startProcess()
    }
  }

  startProcess(){
    
    this.program.processar() 
    console.log('foiiiiiiii')
    
  }
}
