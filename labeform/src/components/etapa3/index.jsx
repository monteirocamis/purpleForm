import React from 'react';
import styled from 'styled-components'
import Etapa1 from '../Etapa1'
import Etapa2 from '../Etapa2'

import Agradecimentos from '../Agradecimentos'
import HeaderLogo from '../HeaderLogo';



const ContainerApp = styled.div `
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  margin: 10% ;
  padding: 20px;
  border-radius: 20px;
`


const HeaderTitle = styled.div `
color: orange;
font-weight: 800;
 text-align:center;
`



const ContentBox = styled.div `
  text-align:center;
  div{
    margin:10px
  }
  button{
    padding:0 5px;
    margin:10px
  }
`



 class Etapa3 extends React.Component{


    render(){
        return (

        
        
<ContainerApp>
          <HeaderLogo/>
          <HeaderTitle><h2> ETAPA 3 - Informações gerais de ensino </h2>  </HeaderTitle>
            <ContentBox> 
              <div> 
              <p>7. Porque você não terminou um curso de graduação? </p>
              <input/>
              </div>
          
              <div> 
              <p>6. Você fez algum curso complementar? </p>
              
              <select>
              
              <option value="">Curso técnico</option>
              <option selected value="">Cursos de inglês</option>
             
              <option value="">Ambos acima</option>
              <option value="">Não fiz curso complementar</option>
            </select>
          
              </div>
                   
          
              <button onClick={this.props.onClickEtapa2}> Voltar </button>

            <button onClick={this.props.onClickAgradecimentos}> Próxima etapa </button>

            </ContentBox>
          
          </ContainerApp>
          
          )
    }
    
}


export default Etapa3