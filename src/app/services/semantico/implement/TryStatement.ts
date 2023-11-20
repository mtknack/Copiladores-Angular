import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class TryStatement implements ILog {

    constructor(
        
    ){
    }

    message(): IObjectLog {
        return {
            analise: "TryStatement",
            status: true
        }
    }


    processar(){
        
	}

}