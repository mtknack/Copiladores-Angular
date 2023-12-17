import { Injectable } from '@angular/core';
import { IToken, Tipo } from './Interfaces';
import { ObjectService } from './semantico/Objetcs/ObjectService';
import { PackageDeclaration } from './semantico/implement/PackageDeclaration';
import { ImportDeclarations } from './semantico/implement/ImportDeclarations';
import { Program } from './semantico/implement/Program';
import { ClassBody } from './semantico/implement/ClassBody';
import { Term } from './semantico/implement/Term';
import { throwError } from 'rxjs';
import { ArgumentList } from './semantico/implement/ArgumentList';

@Injectable({
  providedIn: 'root',
})
export class AnalizadorSemantico {

  constructor(
    private objectService: ObjectService,
    private program:Program,
    private classBody:ClassBody,
    private term:Term,
    private argumentList:ArgumentList
  ){
  }

  initializeVariables(vetorTokens: IToken[]): any{
    if(vetorTokens != null){
      this.objectService.newObject(vetorTokens as IToken[]);
      return this.startProcess()
    }
  }

  async startProcess(){
    
    
    try{
      this.objectService.expecteds = []
      // this.term.processar()
      this.program.processar() 
      // this.argumentList.processar()
      throw Error('')
    }
    catch{
      //ESSE CODIGO E O LOG
      let esperados = this.objectService.expecteds
      let msg = '';
      if(esperados.length === 0){
          return Error(``)
      }
      msg = "Esperando "
      for (let i = 0; i < esperados.length-1; i++) {
        const esperado = esperados[i];
        msg += '"'+esperado.vetor+'"['+ esperado.linha+','+ esperado.coluna+'], '
      }
      const esperado = esperados[esperados.length-1];
          msg += '"'+esperado.vetor+'"['+ esperado.linha+','+ esperado.coluna+']';
      

      return Error(msg)
    }
    
    
  }
}
