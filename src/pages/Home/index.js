import React from 'react';
import history from '../../services/history';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <button onClick={() => history.push('/favorites')}>Favoritos</button>
    </Container>
  )
}

export default Home;