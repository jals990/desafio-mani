import React from 'react';
import { useDispatch } from 'react-redux';

import { addTrack, removeTrack } from '../../store/modules/favorites/actions';

import { Container } from './styles';

function Tracks({ tracks, option }) {
  const dispatch = useDispatch();
  const label = option === 'Add' ? 'Adicionar aos favoritos' : 'Remover';
  console.tron.log(option)
  function changeTrackToFavoriteList(track) {
    if(option === 'Add'){
      dispatch(addTrack(track));
    }else{
      dispatch(removeTrack(track.id));
    }
  }

  return (
    <Container>
      {!tracks ? (
        <strong> sem dados</strong>
      ) : tracks?.map((track, index)  => {
        return (
          <ul key={index}>
            <li>
              <strong>{track.id}</strong>
              <strong>{track.title}</strong>
              <button type="button" onClick={() => changeTrackToFavoriteList(track)}>{label}</button>
            </li>
          </ul>
        )
      })}
    </Container>
  )
}

export default Tracks;