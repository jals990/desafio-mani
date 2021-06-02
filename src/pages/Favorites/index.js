import React from 'react';
import history from '../../services/history';

import { Container } from './styles';

function Favorites() {
  return (
    <Container>
      <button onClick={() => history.push('/')}>Home</button>
    </Container>
  )
}

export default Favorites;