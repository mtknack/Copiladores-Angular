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

  async initializeVariables(vetorTokens: [ITabela | null]){
    if(vetorTokens != null){
      this.objectService.newObject(vetorTokens as [ITabela]);
      await this.startProcess()
    }
  }

  async startProcess(){
    
    await this.packageDeclaration.processar() 
    await this.importsDeclarationsImpl.processar()

    console.clear()
    console.log(this.objectService.printVetorLog()) 
    this.objectService.resetVetorLog()
  }
}
