import { Injectable } from '@angular/core';
import { ITabela, Tipo } from './ITabela';
import { ObjectService } from './semantico/Objetcs/ObjectService';
import { PackageDeclarationImpl } from './semantico/implement/PackageDeclarationImpl';

@Injectable({
  providedIn: 'root',
})
export class AnalizadorSemantico {

  constructor(
    private objectService: ObjectService,
    private packageDeclaration: PackageDeclarationImpl
  ){
  }

  initializeVariables(vetorTokens: [ITabela | null]){
    if(vetorTokens != null){
      this.objectService.newObject(vetorTokens as [ITabela]);
      this.startProcess()
    }
  }

  startProcess(){
    if(this.packageDeclaration.processar()){
      console.log('foiiiiiiii')
    }
  }
}
