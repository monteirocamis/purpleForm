import styled from "styled-components"

export const Container = styled.div`
background-color: #3d1e3e;
display:flex;
justify-content: center;
padding: 1em;
    h1 {
       
        font-size: 28px;
    }
    p {
        font-size: 14px;
        color: #B8B8D4;
    }
    @media screen and (max-device-width : 800px){
  h1{
    font-size:15px;
  }
}
    
`