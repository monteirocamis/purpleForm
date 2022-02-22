import styled from "styled-components";



export const Container = styled.div`
 @media screen and (min-device-width : 1200px){
   display: flex;
   justify-content:center;
    padding:2em;
    }
  
    
    font-family: 'Raleway', sans-serif;
    font-weight: 300 ;
    background-color: #3D1D3D;
    color: white;
    min-height: 100vh;
    padding:1em;
    
`

export const Area = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  
`

export const Steps = styled.div`
    display: flex;
    flex: 1;
 
`

export const Sidebar = styled.div`
    width: 15em;
    border-right: 1px solid #492e4a;
    @media screen and (max-device-width : 800px){
        width: 6em;
   }
`

export const Page = styled.div`
     padding: 1em;
`