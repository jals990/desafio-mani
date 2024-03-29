import React from 'react';
import { useSelector } from 'react-redux';

import history from '../../services/history';

import Navbar from '../../components/Navbar';
import Tracks from '../../components/Tracks';

import { Container } from './styles';

function Home() {
  const tracks = useSelector(state => state.tracks.tracks);
  const loading = useSelector(state => state.tracks.loading);

  return (
    <Container>
      <Navbar />
      {loading ? (
        <small>Carregando dados</small>
      ): (
        <Tracks tracks={tracks} option={'Add'} />
      )}
      <div className="navigation">
        <button onClick={() => history.push('/favorites')}>Músicas Favoritas</button>
      </div>
    </Container>
  )
}

export default Home;