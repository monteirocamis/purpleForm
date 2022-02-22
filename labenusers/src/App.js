import styled from 'styled-components'
import './App.css';
import axios from 'axios'
import Register from './components/Register';
import React from 'react';

const AppContent = styled.div`
display: flex;
justify-content: start;
flex-direction:column;
margin: 10vh;
padding: 50px;
height: 50vh;
align-items: center;
background-color: #600C5580;
border-radius: 8px;

`
const axiosConfig = {
  headers: {
    Authorization: "camis-joy"
  }
};


export default class App extends React.Component {
  state = {
    users : [],
    inputEmailValue : "",
    inputNameValue: "",
    userId : ""
  }




componentDidMount(){
  this.getAllUsers()

}


 getAllUsers = async() =>{


//   axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" , axiosConfig)
//   .then((response)  => {
//     // console.log(response.data) //.result.list
//     this.setState({users: response.data })
//   })
//   .catch((error)  => {
//    console.log(error.response.data)
//  })

  const url ="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" 

  try {
    const response = await axios.get(url  , axiosConfig)
    this.setState({users: response.data })
  } catch (error) {
    alert("Ocorreu um erro, tente novamente!")
  }

}





changeEmailInput = (event) => {
  this.setState({inputEmailValue: event.target.value })
  //console.log(event.target.value)
}

changeNameInput = (event) => {
  this.setState({inputNameValue: event.target.value })
}



createUser = () =>{

  const URL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const body = {
    name: this.state.inputNameValue,  
      email: this.state.inputEmailValue
  }
 

  axios.post(URL , body , axiosConfig)
  .then((response) => {
    alert("Usuario criado com sucesso! ")
    this.getAllUsers()
  }

  ).catch((error) =>{
    console.log(error.response.data)
  }

  )

}




deleteUser = userId =>{


  // axios.delete("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}" , axiosConfig)
  // .then(() => {
  //   alert("Usuario deletado! ")
  //   this.getAllUsers()
  // })
  // .catch(e => {
  //   alert("ERRO AO APAGAR USUARIO");
  // })




  axios.delete(
    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
    axiosConfig
  )
  .then(() => {
    alert("Usuário apagado com sucesso!");
    this.getAllUsers();
  })
  .catch(e => {
    alert("ERRO AO APAGAR USUARIO");
  });




}








  render(){
    
    const listUsers = this.state.users.map((user)=> {
      return       <p key={user.id}>
         {user.name}  <button onClick={() => this.deleteUser(user.id)} > Deletar </button>
         </p>
    })


    
   



    return (
      <AppContent>
     

        <div className='registerComponent'>
        <h2> Cadastro do usuário </h2>
         
          <input
           placeholder='Email' 
           value={this.state.inputEmailValue} 
           onChange={this.changeEmailInput}/>


         <input placeholder='Name' value={this.state.inputNameValue} onChange={this.changeNameInput}/> 

         <button onClick={this.createUser} > Adicionar </button> 
            </div> 
  
      
        <div className='usersComponent'>
        <h2> Lista de usuários </h2>

       <div> {listUsers} </div>

          
       
     </div>
  
  
  
      </AppContent>
    )
  } 
}

