import axios from "axios"


export const Api = axios.create({ baseURL: 'https://api.staging.purplemetrics.com.br/api'})

