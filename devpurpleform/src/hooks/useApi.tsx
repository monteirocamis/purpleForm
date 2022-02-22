
import {  useState , useCallback } from "react"
import { PurpleService } from "../services/purpleService"
import { IPurpleForm } from "../interfaces/IPurpleForm"



export const  useApi = () => {


    const [itemsFromApi, setItemsFromApi] = useState<IPurpleForm[]>([]);


    const getAll = useCallback(async () =>{
        const {status, data } = await PurpleService.getAll()

        if(status !== 200) throw new Error()
        setItemsFromApi(data)
       
    }, [] ) 




    return {
        itemsFromApi,
        getAll,
    }


}

