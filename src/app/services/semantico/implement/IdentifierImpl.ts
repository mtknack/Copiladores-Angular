import { Injectable } from "@angular/core";
import { IIdentifier } from "../interfaces/IIdentifier";
import { ObjectService } from "../Objetcs/ObjectService";


@Injectable({
    providedIn: 'root',
})
export class IdentifierImpl {

    constructor(
        private objectService: ObjectService
    ){}

    processar(){
        if(this.objectService.getVetorTokensAtual('')){
            
            return true
        }
        else{
            return false
        }
    }
}