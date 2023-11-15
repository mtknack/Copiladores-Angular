import { Injectable } from '@angular/core';
import { ITabela, Tipo } from './ITabela';
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

  initializeVariables(vetorTokens: [ITabela | null]){
    if(vetorTokens != null){
      this.objectService.newObject(vetorTokens as [ITabela]);
      this.startProcess()
    }
  }

  startProcess(){
    if(
      this.packageDeclaration.processar() 
      &&
      this.importsDeclarationsImpl.processar()
      ){
      console.log('foiiiiiiii')
    }
  }
}
