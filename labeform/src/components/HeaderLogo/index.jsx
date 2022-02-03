import React from 'react';
import styled from 'styled-components'

import logo from '../../imgs/logolabeforms.png'

const LogoCenter = styled.div `
  display: flex;
 justify-content: center;
 padding-bottom:20px;
 img{
     width: 150px;
 }
`



class HeaderLogo extends React.Component{
    render(){
        return(
          
               <LogoCenter>
               <img src={logo} alt='logo da labenu e escrito labeform ao lado' />
             </LogoCenter>
      
        )
    }
}
export default HeaderLogo