
import {  useState , useCallback } from "react"

import { purpleService } from "../services"
import { ipurpleform } from "../interfaces"

export const  useQuestions = () => {
    const [questions, setQuestions] = useState<ipurpleform[]> ([]);

    const getAll = useCallback(async () =>{
        const {status, data } = await purpleService.getAll()

        if(status !== 200) throw new Error()
        setQuestions(data)

    }, [] ) 

    return {
        questions,
        getAll,
    }

}

