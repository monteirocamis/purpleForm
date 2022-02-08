import React from "react"
import axios from "axios"
import { useEffect , useState } from "react"

export const  useQuestions = () => {


    const [questions, setQuestions] = useState([])

    useEffect(()  => {
        axios
        .get("https://api.staging.purplemetrics.com.br/api/v1/list-questions/5c56a367-a16d-47c2-b369-076b7595903c/1234?fields=theme") 
        .then((response) => {
         console.log(response.data)
         // setQuestions(response.data)
        })
    } , [] )



    return questions

}

