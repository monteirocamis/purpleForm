
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home';



export const Router = () => {
    return (
        <BrowserRouter> 
        <Routes>
          <Route path="/" exact element={<Home/>} />
        </Routes>
         
        </BrowserRouter>
        
    );
}