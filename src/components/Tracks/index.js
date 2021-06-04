import React from 'react';
import { useDispatch } from 'react-redux';

import { FaStar } from 'react-icons/fa';
import { IoIosRemoveCircle } from 'react-icons/io';

import logodeezer from '../../assets/logodeezer.png';
import { addTrack, removeTrack } from '../../store/modules/favorites/actions';

import Control from '../TrackControl';

import { Container } from './styles';

function Tracks({ tracks, option }) {
  const dispatch = useDispatch();
  const label = option === 'Add' ? (
    <FaStar size={18} className="svg-yellow"/>
  ): (
    <IoIosRemoveCircle size={18} className="svg-red"/>
  );

  function changeTrackToFavoriteList(track) {
    if(option === 'Add'){
      dispatch(addTrack(track));
    }else{
      dispatch(removeTrack(track.id));
    }
  }

  return (
    <Container>
      <ul>
        {!tracks || tracks.length === 0 ? (
          <center> sem dados</center>
        ) : tracks?.map((track, index)  => {
          return (
              <li key={index}>
                <img src={track.album.cover_big} alt={track.album.title} />
                <div>
                  <strong>{`Artista: ${track.artist.name}`}</strong>
                  <strong>{`Música: ${track.title}`}</strong>
                  <strong>{`Álbum': ${track.album.title}`}</strong>
                  <strong>{`Duração: ${track.duration}`}</strong>
                </div>
                <div className="combo-btn">
                  <button type="button" onClick={() => changeTrackToFavoriteList(track)}>{label}</button>
                  <Control src={track.preview}/>
                  <button type="button" onClick={() => window.open(track.link)}><img src={logodeezer} alt="Ouça no Deezer"/></button>
                </div>
              </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Tracks;