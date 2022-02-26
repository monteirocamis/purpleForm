import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import {
  getQuestionToChooseRequest,
  chooseQuestionRequest
} from "../../hooks/useQuestions";
import ProfileCard from "../../components/ProfileCard";

function App(props) {
  const navigate = useNavigate();



const [questionToChoose, setQuestionToChoose] = useState(undefined);

const getQuestionToChoose = () => {
  getQuestionToChooseRequest()
  .then(question => {
    setQuestionToChoose(question);
  });
};


useEffect(() => {
  getQuestionToChoose();
}, []);

  return (

    <>

    
        {questionToChoose ? 
        (
        <>
          <ProfileCard question={questionToChoose} />
        
        </>
      )
       : 
       (
        <p>Carregando...</p>
       )
      }

     
      
    </>
  );
}

export default App;
