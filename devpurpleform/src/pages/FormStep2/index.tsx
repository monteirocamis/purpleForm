import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
       <Theme>
            <C.Container>
            <hr/>

                <p> Passo - {state.currentStep}</p>
                <h1>{state.name}, há quando tempo você programa ?</h1>
              
                <SelectOption
                   title="Há 2 anos"
                    icon="👶" 
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                  title="Há mais de 2 anos"
                    icon="😎"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

            
                 <Link to="/" className="backButton"> Voltar </Link>
                <button onClick={handleNextStep}> Próximo </button>

            
               
            </C.Container>
        </Theme>
    );
}