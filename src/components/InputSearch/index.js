import React, { useState, useEffect }from 'react';
import { useDispatch } from 'react-redux';
import { FaSearchMinus, FaSearchPlus} from 'react-icons/fa';

import { searchRequest, tracksRequest } from '../../store/modules/tracks/actions';

import { Container } from './styles';

function InputSearch() {

  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  
  function handleChangeSearch(arg){
    setFilter(arg)
    dispatch(searchRequest({ arg: arg }))
  }

  function requestTracks(){
    setFilter('');
    dispatch(tracksRequest())
  }

  useEffect(() => {
    if(filter === ' ' || filter === ''){
      setFilter('');
      dispatch(tracksRequest())
    }
  }, [filter])

  return (
    <Container>
      <input 
        value={filter} 
        onChange={(e) => handleChangeSearch(e.target.value)} 
        placeholder="Pesquise uma música, álbum ou cantor"
      />
      {filter === '' && <FaSearchPlus size={20} />}
      {filter !== '' && <FaSearchMinus size={20} onClick={requestTracks} />}
    </Container>
  )
}

export default InputSearch;