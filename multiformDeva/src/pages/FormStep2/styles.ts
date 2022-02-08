import styled from "styled-components";

export const Container = styled.div`


    @media screen and (max-device-width : 800px){
        width: 13em;
    }
   
    p {
    font-size: 13px;
    color: #B8B8D4;
    }
    h1 {
    margin:0;
    padding: 0;
    font-size: 26px;
    }
    hr {
        height: 1px;
        border: 0;
        background-color: #492e4a;
        margin: 30px 0;
    }
    

    label {
        font-size: 13px;

        input {
            display: block;
            margin: 7px 0;
            padding: 0.7em;
            border: 2px solid #3976FF;
            border-radius: 10px;
            color: #FFF;
            font-size: 15px;
            background-color: #604861;
        }
       
    }

    button {
        background-color:  #3976FF;  
        color: #FFF;
        font-weight: bold;
        padding: 10px 20px;
        border: 0;
        border-radius: 30px;
        margin-top: 30px;
    }

    .backButton{
        font-size: 16px;
        text-decoration:none;
        padding: 10px 20px;
        color: #B8B8D4;
    }
`;