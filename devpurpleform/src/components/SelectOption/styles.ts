import styled from "styled-components";

export const Container = styled.div<{ selected: boolean; }>`
    display: flex;
    border: 2px solid purple;
    border-radius: 10px;
    padding:0 1em;
    margin-bottom: 15px;
    align-items: center;
    background-color: ${props => props.selected ? 'purple' : 'none'};
    min-width:300px;
    color:${props => props.selected ? 'white' : 'purple'};
    
    &:hover {
        border: 2px solid blue;
       
    }

`;

export const Icon = styled.div`
    width: 60px;
  
   
    display: flex;
  
    align-items: center;
    font-size: 25px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 7px;
`;

// export const Description = styled.div`
//     font-size: 14px;
//     color: #B8B8D4;
// `;