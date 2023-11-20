import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class IfStatement implements ILog {

    constructor(
        
    ){
    }

    message(): IObjectLog {
        return {
            analise: "IfStatement",
            status: true
        }
    }


    processar(){
        
	}

}