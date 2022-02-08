import styled from "styled-components";

export const Container = styled.div`
    margin: 2em 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }
  
`

export const Info = styled.div`
    flex: 1;
    margin-right: 1.5em;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: white;
    @media screen and (max-device-width : 800px){
      display: none;
   }
`;

export const Description = styled.div`
    text-align: right;
    font-size: 13px;
    color: #604861;
    @media screen and (max-device-width : 800px){
      display: none;
   }
`;

export const IconArea = styled.div<{ active: boolean }>`
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: ${props => props.active ? '#f25657' : '#604861'} ;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

export const Point = styled.div<{ active: boolean }>`
    width: 6px;
    height: 6px;
    border: 2px solid #f25657;
    border-radius: 50%;
    margin-left: 2em;
    margin-right: -6px;
    background-color: ${props => props.active ? '#f25657' : '#3d1e3e'}
`;