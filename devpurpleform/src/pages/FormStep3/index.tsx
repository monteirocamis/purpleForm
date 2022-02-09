import {  Link } from 'react-router-dom';
import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useApi } from '../../hooks';
import {  useEffect } from 'react';
// import axios from 'axios';
//import { useQuestions } from '../../hooks/useQuestions';
import { useForm } from '../../contexts/FormContext';
import { List } from '../../components/List/List';


export const FormStep3 = () => {
   //// const history = useHistory();
    //const { state, dispatch } = useForm();
   
   const {itemsFromApi, getAll } = useApi()

    useEffect(() => {
      
      getAll()
   
     } , [getAll])

  

    return (
        <Theme>
            <C.Container>
            
            
                <hr/>

                <h2> perguntas </h2> 
                <Link to="/" className="backButton"> Voltar </Link>

                {/* //<List itens={itemsFromApi} />  */}

            <p>{itemsFromApi} </p>

          
            </C.Container>
        </Theme>
    );
}



export default FormStep3