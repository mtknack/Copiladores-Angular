import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class ReturnStatement implements ILog {

    constructor(
        
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ReturnStatement",
            status: true
        }
    }


    processar(){
        
	}

}