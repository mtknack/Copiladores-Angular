import { Injectable } from '@angular/core';
import { IToken, Tipo } from './Interfaces';
import { ObjectService } from './semantico/Objetcs/ObjectService';
import { PackageDeclarationImpl } from './semantico/implement/PackageDeclarationImpl';
import { ImportsDeclarationsImpl } from './semantico/implement/ImportsDeclarationsImpl';

@Injectable({
  providedIn: 'root',
})
export class AnalizadorSemantico {

  constructor(
    private objectService: ObjectService,
    private packageDeclaration: PackageDeclarationImpl,
    private importsDeclarationsImpl: ImportsDeclarationsImpl,
  ){
  }

  initializeVariables(vetorTokens: IToken[]){
    if(vetorTokens != null){
      this.objectService.newObject(vetorTokens as IToken[]);
      this.startProcess()
    }
  }

  startProcess(){
    
    this.packageDeclaration.processar() 
    this.importsDeclarationsImpl.processar()
    console.log('foiiiiiiii')
    
  }
}
