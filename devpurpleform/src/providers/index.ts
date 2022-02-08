import axios from "axios"


export const Api = axios.create({ baseURL: 'https://api.staging.purplemetrics.com.br/api'})

// api/v1/list-questions/5c56a367-a16d-47c2-b369-076b7595903c/user=1234?fields=theme 