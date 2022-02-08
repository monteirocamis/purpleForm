import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    border: 2px solid ${props => props.selected ? '#3876ff' : 'gray'};
    border-radius: 1em;
    padding: 1.5em;
    margin-bottom: 1em;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 2px solid white; 
    }
`;

export const Icon = styled.div`
    width: 2.5em;
    height: 60px;
    display: flex;
    
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: #492e4a;
   
    font-size: 25px;
`

export const Info = styled.div`
    flex: 1;
    margin-left: 1.5em;
`

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 0.5em;
`

export const Description = styled.div`
    font-size: 14px;
    color: #B8B8D4;
`