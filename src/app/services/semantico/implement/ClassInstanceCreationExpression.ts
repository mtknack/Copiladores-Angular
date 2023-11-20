import { Injectable } from "@angular/core";
import { ILog, IObjectLog } from "../Objetcs/Log";


@Injectable({
    providedIn: 'root',
})
export class ClassInstanceCreationExpression implements ILog {

    constructor(
        
    ){
    }

    message(): IObjectLog {
        return {
            analise: "ClassInstanceCreationExpression",
            status: true
        }
    }


    processar(){
        
	}

}