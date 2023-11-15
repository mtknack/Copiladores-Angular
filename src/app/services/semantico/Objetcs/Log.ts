export interface IObjectLog {
    analise: String
    status: boolean
}

export interface ILog {

    message(): String
    status(): boolean
}