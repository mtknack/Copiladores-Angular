import { IIdentifier } from "./IIdentifier";
import { PalavrasReservadas } from "../Reservadas";
import { Tipo, ITabela } from "../ITabela";

export class IImportDeclaration implements IImportDeclaration{
    tokens : [ITabela];

    constructor(tokens:[ITabela]){
        this.tokens = tokens;
    }

    qtdRegras = 3;
    // regra1: PalavrasReservadas.IMPORT;
    // regra2: IIdentifier;
    // regra3: PalavrasReservadas.COLON;


    // <variableDeclarators> → <variableDeclarator> | , <identifier> <variableDeclarators> | E

    regra = [PalavrasReservadas.IMPORT, Tipo.IDENTIFICADOR_VALIDO, PalavrasReservadas.COLON];
    regra1 = [PalavrasReservadas.IMPORT, Tipo.IDENTIFICADOR_VALIDO, PalavrasReservadas.BREAK];

    
    //Metodos de assinatura dop implements
    process(){
        for (let index = 0; index < this.qtdRegras; index++) {
            if(this.tokens[index].token == this.regra[index]){  
                
            } 
        }
            
    }
        //Preocessa a regra 1 
        // if(verifica retorno da regra 1 == 0 ){

        // }
        // if(verifica retorno da regra 2(parte 1) == 0 ){
            
        // }
}


