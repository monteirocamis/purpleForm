import { ipurpleform } from "../interfaces"
import { Api } from "../providers"

const getAll = () => Api.get<ipurpleform[]>('/v1/list-questions5c56a367-a16d-47c2-b369-076b7595903c/user=1234?fields=theme')

export const purpleService ={
    getAll,
}
