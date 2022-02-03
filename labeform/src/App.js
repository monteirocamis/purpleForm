import React  from 'react';
import './App.css';
import Etapa2 from './components/Etapa2'
import Etapa1 from './components/Etapa1'
import Etapa3 from './components/Etapa3'
import Agradecimentos from './components/Agradecimentos'




 class App extends React.Component {
  state = {
    pagina: "etapa1",
    login: false
  };


  irParaEtapa1 = () => {
    this.setState({ pagina: "etapa1" });
  };

  irParaEtapa2 = () => {
    this.setState({ pagina: "etapa2" });
  };

  irParaEtapa3 = () => {
    this.setState({ pagina: "etapa3" });
  };

  irParaAgradecimentos = () => {
    this.setState({ pagina: "agradecimentos" });
  };

  render(){

    let secao;

    switch (this.state.pagina) {
      case "etapa1":
        secao = <Etapa1 onClickEtapa2={this.irParaEtapa2}  /> ;
        break;

      case "etapa2":
        secao = <Etapa2 onClickEtapa1={this.irParaEtapa1} onClickEtapa3={this.irParaEtapa3} /> ;
        break;


      case "etapa3":
        secao = <Etapa3 onClickEtapa2={this.irParaEtapa2}  onClickAgradecimentos={this.irParaAgradecimentos}/>;
        break;

        case "agradecimentos":
          secao = <Agradecimentos onClickEtapa1={this.irParaEtapa1}  />;
          break;


      default:
        secao = <p> nenhuma pagina selecionada</p>;
    }




    return (
      <>
      
        {secao}

   
      </>
    );
  }
 
}

export default App