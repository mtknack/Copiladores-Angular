import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class BreakStatement implements ILog {

    constructor(
        
    ){
    }

    message(): IObjectLog {
        return {
            analise: "BreakStatement",
            status: true
        }
    }


    processar(){
        
	}

}