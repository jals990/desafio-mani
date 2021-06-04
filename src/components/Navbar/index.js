import React from 'react';
import { useLocation } from 'react-router-dom';
import CustomInput from '../InputSearch';

import deezer from '../../assets/deezer.png';
import mani from '../../assets/mani.png';

import { Container } from './styles';

function Navbar() {
  const location = useLocation();
  
  return (
    <Container>
      <div>
        <img src={mani} alt="Manipulaê" />
        <img src={deezer} alt="Deezer" />
      </div>
      {location.pathname === '/favorites' ? (<hr />) : (
        <CustomInput />
      )}
    </Container>
  )
}

export default Navbar;