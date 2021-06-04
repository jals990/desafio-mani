import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Alert } from 'rsuite';
import { FiPause } from 'react-icons/fi'; 
import { FaPlay } from 'react-icons/fa'; 

import { endTrack, playTrack } from '../../store/modules/tracks/actions';

function TrackControl({ src }) {
  const audioRef = useRef();
  const [play, setPlay] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(new Audio());
  const endedPlay = useSelector(state => state.tracks.endedPlayTrack);

  const dispatch = useDispatch();

  const handlePlay = () => {

    if(!endedPlay){
      Alert.warning('Aguarde a prévia atual terminar');
      return
    }
    setCurrentTrack(audioRef.current);
    setPlay(true);
    audioRef.current.play();
    dispatch(playTrack())
  };

  const handlePause = () => {
    setPlay(false);
    audioRef.current.pause();
    dispatch(endTrack());
  };

  useEffect(() => {
    dispatch(endTrack());
  }, [])

  currentTrack.addEventListener("ended", function() {
    setPlay(false);
    dispatch(endTrack());
  });

  return (
    <div play={play}>
      <audio ref={audioRef} src={src} />
      {play && <FiPause size={16} onClick={handlePause} />}
      {!play && <FaPlay size={16} onClick={handlePlay} className="svg-green" />}
    </div>
  );
}

export default TrackControl;