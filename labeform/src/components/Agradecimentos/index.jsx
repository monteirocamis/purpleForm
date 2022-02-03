import React from "react"
import styled from "styled-components"
import Etapa1 from '../Etapa1'
import Etapa2 from '../Etapa2'
import Etapa3 from '../Etapa3'
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
 class Agradecimentos extends React.Component {
  render(){
      return (     
        <>
       
        <ContainerApp>
        <HeaderLogo/>
    <ContentBox> 
         
            <div> 
            <h3>O FORMULÁRIO ACABOU!</h3>
            <p>Muito obrigada  por participar, entraremos em contato. </p>
            
            </div>

            <button onClick={this.props.onClickEtapa1}> Inicio </button>

         </ContentBox>
  
      </ContainerApp>
      </>
      )
    }
}

export default Agradecimentos