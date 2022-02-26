import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as C from './styles';
import useQuestions, { getQuestionToChooseRequest } from '../hooks/useQuestions'

const ContainerApp = styled.div`
  display: flex;
  justify-content: center;
  margin-top:2em;
`
const Nav = styled.div`
  display: flex;
  justify-content: end;
  p{
    background-color:gainsboro;
    color:purple;
    padding:0.5em;
    border-radius:8px;
  }

`

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

});




function ProfileCard() {

  const classes = useStyles();
  const navigate = useNavigate();
 
      
      
    const [lista, setLista] = useState([]);
    const [position, setPosition] = useState(0)

    useEffect(() => {
      handleGetQuestions()
    }, [position])

    const handleGetQuestions = async() => {
      const response = await getQuestionToChooseRequest()
      console.log(response)
      setLista(response);
    }

      const changeSetPosition = () =>{
        setPosition(position + 1);
    }
    console.log(lista[position])

return (
  <ContainerApp>
  
  <Card className={classes.root}>
    <CardActionArea>
       <CardContent>        

              <hr/>
              <Typography gutterBottom variant="h5" component="h2">
              <h2> {lista[position].text}</h2>
              </Typography>
                  
              
                <C.InputsFromUser >
                  <label>
                    <input  type="text"    />
                  </label>
                </C.InputsFromUser>
                       
        </CardContent>
     </CardActionArea>

   <Nav>
     <Button onClick={changeSetPosition}>    próximo      </Button>
    </Nav>
      
  </Card>

</ContainerApp>
   
  );
}

export default ProfileCard;




