import { Injectable } from "@angular/core";
import { ReservadasEnum } from "../../Reservadas";
import { IClassModifier } from "../IClassModifier";
import { IIdentifier } from "../IIdentifier";


@Injectable({
    providedIn: 'root',
})
export class IdentifierImpl implements IIdentifier {

    regra1!: String;

    processar( a: any ){

        if(a === String){
            return true
        }
        else{
            return false
        }
        
    }
}