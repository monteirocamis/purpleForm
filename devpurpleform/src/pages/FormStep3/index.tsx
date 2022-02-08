import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect , useState} from 'react';
import axios from 'axios';
import { useQuestions } from '../../hooks/useQuestions';


export const FormStep3 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();
    






    return (
        <Theme>
            <C.Container>
            
            
                <hr/>

                <h2> perguntas </h2> 
                <Link to="/" className="backButton"> Voltar </Link>
                {useQuestions()}
            

          
            </C.Container>
        </Theme>
    );
}



export default FormStep3