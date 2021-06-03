import React, { useState }  from 'react';
import { useDispatch } from 'react-redux';

import { searchRequest, tracksRequest } from '../../store/modules/tracks/actions';

import mani from '../../assets/mani.png';
import deezer from '../../assets/deezer.png';

import { Container } from './styles';

function Navbar() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  function handleChangeSearch(){
    dispatch(searchRequest({ arg: filter }))
  }

  function requestTracks(){
    setFilter('');
    dispatch(tracksRequest())
  }

  return (
    <Container>
      <div>
        <img src={mani} alt="Manipulaê" />
        <img src={deezer} alt="Deezer" />
      </div>
      <form>
        <input 
          type="text" 
          name="search"
          placeholder="Pesquisa"
          value={filter}
          onChange={(e) => setFilter(e.target.value)} 
        />
        <button type="button" onClick={() => handleChangeSearch()}>Pesquisar</button>
        <button type="button" onClick={() => requestTracks()}>Limpar Pesquisa</button>
      </form>
    </Container>
  )
}

export default Navbar;