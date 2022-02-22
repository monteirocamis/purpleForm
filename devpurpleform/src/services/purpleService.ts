import { IPurpleForm } from "../interfaces/IPurpleForm"
import { Api } from "../providers"

const getAll = () => Api.get<IPurpleForm[]>('/v1/list-questions/5c56a367-a16d-47c2-b369-076b7595903c/1236?fields=theme')

export const PurpleService ={
    getAll,
}


//https://api.staging.purplemetrics.com.br/api/v1/list-questions/5c56a367-a16d-47c2-b369-076b7595903c/1236?fields=theme