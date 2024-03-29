import React from 'react';
import { useSelector } from 'react-redux';

import history from '../../services/history';
import Navbar from '../../components/Navbar';
import Tracks from '../../components/Tracks';

import { Container } from './styles';

function Favorites() {
  const tracks = useSelector(state => state.favorites.favorites);

  return (
    <Container>
      <Navbar />
      {!tracks ? (
        <strong>Você não possui nenhuma música favorita</strong>
      ): (
        <Tracks tracks={tracks} option={'Remove'} />
      )}
      <div className="navigation" >
        <button onClick={() => history.push('/')}>Home</button>
      </div>
    </Container>
  )
}

export default Favorites;