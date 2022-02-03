import React from 'react'
import styled from 'styled-components'
import Etapa1 from '../Etapa1'
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




 class Etapa2 extends React.Component {

  // state = {
  //   etapa3: false
    
  // };

  // goEtapa3 = () => {
  //   this.setState({ etapa3: true });
  // };

  // goEtapa2 = () => {// onde esta
  //   this.setState({ etapa3: false }); 
  // };

    render(){
   
  
      // let pagina = this.state.etapa3 ? ( 
      //   <Etapa3 onClickEtapa2={this.goEtapa2} />
      // ) : (
      //   <Etapa2 onClickEtapa3={this.goEtapa3} />
      // );
  
      
      
      return(
           
        <ContainerApp>

            <HeaderLogo/>
            <HeaderTitle>
               <h2> ETAPA 2 - Informações do ensino superior</h2> 
            </HeaderTitle> 
            <ContentBox> 
                <div> 
                <p>5. Qual curso? </p>
                <input/>
                </div>

                <div> 
                <p>6. Qual unidade de ensino? </p>
                <input/>
                </div>

                <button onClick={this.props.onClickEtapa1}> voltar  </button>

                <button onClick={this.props.onClickEtapa3}> Próxima etapa </button>


            </ContentBox> 
        </ContainerApp>
           
          )  
        }
     
}
export default Etapa2