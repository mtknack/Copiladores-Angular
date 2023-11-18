export interface IObjectLog {
    analise: String
    status: boolean
}

export interface ILog {

    message(): IObjectLog,
    processar():any

}