import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'rsuite';

import logodeezer from '../../assets/logodeezer.png';
import { addTrack, removeTrack } from '../../store/modules/favorites/actions';
import { endTrack, playTrack } from '../../store/modules/tracks/actions';
import { Container } from './styles';

function Tracks({ tracks, option }) {
  const endedPlay = useSelector(state => state.tracks.endedPlayTrack);
  const playMusic = useSelector(state => state.tracks.playMusic);

  const dispatch = useDispatch();
  const [currentTrack, setCurrentTrack] = useState(new Audio());

  const label = option === 'Add' ? '⭐️' : '🚫';

  function changeTrackToFavoriteList(track) {
    if(option === 'Add'){
      dispatch(addTrack(track));
    }else{
      dispatch(removeTrack(track.id));
    }
  }

  function toHearTrack(track){
    if(!endedPlay && playMusic){
      Alert.warning('Aguarde a prévia atual terminar');
      return
    }

    Alert.warning(`Tocando ${track.title}`);
    var preview = new Audio(track.preview);
    setCurrentTrack(preview);
    dispatch(playTrack())
  }

  useEffect(() => {
    if(playMusic && !endedPlay){
      currentTrack.play();
    }
  }, [currentTrack])

  currentTrack.addEventListener("ended", function() {
    dispatch(endTrack());
  });

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
                  <button id="audio" type="button" onClick={() => toHearTrack(track)}>⏯</button>
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