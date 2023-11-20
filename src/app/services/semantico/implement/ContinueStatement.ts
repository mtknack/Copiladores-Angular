import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class ContinueStatement implements ILog {

    constructor(
        
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ContinueStatement",
            status: true
        }
    }


    processar(){
        
	}

}