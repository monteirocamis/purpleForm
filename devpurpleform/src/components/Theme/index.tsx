import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header';
// import { SidebarItem } from '../SidebarItem';
// import { useForm } from '../../contexts/FormContext';

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => { 

//     const { state } = useForm();

 return (
    <C.Container>
             <C.Area>
                 <Header />

                {/* / <C.Steps> */}

                    

                    <C.Page>
                        {children}
                    </C.Page>

             {/* / </C.Steps> */}

            </C.Area>
        </C.Container>
    )
 }













