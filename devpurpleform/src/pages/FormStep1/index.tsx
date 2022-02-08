import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import '../../App.css';

export const FormStep1 = () => {

    const history = useHistory();
    const { state, dispatch } = useForm();


    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
           history.push('/step2');
       } else {
             alert("Preencha seu nome! ");
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }



    

    return (
         <Theme>
            <C.Container>
         
                <hr/>
                <C.InputsFromUser >

                <label>
                    Qual seu nome completo ?
                    <input
                        type="text"
                        value={state.name}
                       onChange={handleNameChange}
                    />
                </label>
                </C.InputsFromUser>
             
 
                <button onClick={handleNextStep}>Próximo</button> 
            </C.Container>
         </Theme>
    );
}