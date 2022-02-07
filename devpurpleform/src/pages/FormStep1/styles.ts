import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction:column;
    hr {
    
        @media screen and (max-device-width : 800px){
            width: 20em;
        }
        width: 40em;
        height: 0.3em;
        background-color: #3d1e3e;
     }
       

    label {
      font-size: 18px;
      color:#3d1e3e;
       margin-top:1em;
        input {
            display: block;
            margin: 7px 0;
            padding: 0.7em;
            border: 2px solid  #3d1e3e;
            border-radius: 10px;
            color: purple;
        }
       
    }

    button {
        align-self:end;
        background-color:  #3d1e3e;   
        color: #FFF;
        font-weight: bold;
        padding:0.4em;
        border-radius: 10px;
        margin-top: 1em;
        font-size:20px;
        border: 0;
    }
`

export const InputsFromUser = styled.div`
    display:flex ;
    justify-content:center;
   `