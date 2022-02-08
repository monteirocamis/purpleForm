import styled from "styled-components";

export const Container = styled.div`

   
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
        background-color: #B8B8D4;
        margin: 30px 0;
    }
    

    label {
        font-size: 13px;

        input {
            display: block;
            margin: 7px 0;
            //box-sizing: border-box;
            //width: 100%;
            padding: 0.7em;
            border: 2px solid #3976FF;
            border-radius: 10px;
            color: #FFF;
            //outline: 0;
            font-size: 15px;
            background-color: #3D1D3D;
        }
       
    }

    button {
        background-color:  #3976FF;   //  #25CD89;
        color: #FFF;
      //  font-size: 14px;
        font-weight: bold;
        padding: 10px 20px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
    }
    .backButton{
        font-size: 16px;
        text-decoration:none;
        padding: 10px 20px;
        color: #B8B8D4;
    }
`;