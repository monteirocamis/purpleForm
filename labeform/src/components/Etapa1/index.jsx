import React from 'react';
import styled from 'styled-components'
import style from '../../App.css'
import Etapa2 from '../Etapa2'
import HeaderLogo from '../HeaderLogo';

const ContainerApp = styled.div `
 background-color: #f4f4f4;
  display: flex;

  justify-content: center;
 
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

class Etapa1 extends React.Component{
  irParaPosts = () => {
    this.setState({ pagina: "posts" });
  };


    render(){
     
        return(
            <> 
            <ContainerApp>
        
          
              <ContentBox> 
             
           


            <HeaderLogo/>
                   
              <HeaderTitle><h2> ETAPA 1 - DADOS GERAIS</h2>  </HeaderTitle>
                 <div> 
                  <p>1. Qual o seu nome? </p>
                  <input/>
                  </div>
             
                  <div> 
                  <p>2. Qual a sua idade? </p>
                  <input/>
                  </div>
             
                  <div> 
                  <p>2. Qual o seu email? </p>
                  <input/>
                  </div>
             
                  <div> 
                  <p>1. Qual a sua escolaridade? </p>
                  <select>
                    <option value="medioIncompleto">Ensino Médio Incompleto</option>
                    <option value="medioCompleto">Ensino Médio Completo</option>
                    <option selected value="superiorIncompleto">Ensino Superior Incompleto</option>
                    <option value="superiorCompleto">Ensino Superior Completo</option>
                  </select>
                  </div>
              
                  
               <button onClick={this.props.onClickEtapa2}>Próxima etapa</button>
           
              </ContentBox>
        
          </ContainerApp>
          </>
        )
    }
}

export default Etapa1 