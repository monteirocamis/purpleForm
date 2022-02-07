import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction:column;
   color: purple;
   align-items:center;

   p {
    font-size: 13px;
    color: purple;
    }

    hr {
    
        @media screen and (max-device-width : 800px){
            width: 20em;
        }
        width: 40em;
        height: 0.3em;
        background-color: #3d1e3e;
     }
       
     h1 {
     
    margin:1em;
    padding: 0;
    font-size: 16px;
    }
    label {
      font-size: 18px;
      color:purple;
       margin-top:1em;
        input {
            display: block;
            margin: 7px 0;
            padding: 1em;
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
        margin-top: -1em;
        font-size:20px;
        border: 0;
    }
    .backButton{
        
        font-size: 16px;
        text-decoration:none;
        color: #B8B8D4;
    }

`


// export const Controls = styled.div`
//  display: flex;
// align-items:end;
//  button {
//     align-self:end;
//         background-color:  #3d1e3e;   
//         color: #FFF;
//         font-weight: bold;
//         padding:0.4em;
//         border-radius: 10px;
//         margin-top: 1em;
//         font-size:20px;
//         border: 0;
//     }
//     .backButton{
     
//         font-size: 16px;
//         text-decoration:none;
       
//         color: #B8B8D4;
//     }
// `
