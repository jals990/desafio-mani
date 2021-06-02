import { takeLatest, call, put, all } from "redux-saga/effects";

import { Alert } from 'rsuite';
import api from "../../../services/api";

import { searchRequestSuccess, searchRequestFailure } from "./actions";

export function* searchSongs({ payload }) {
  try {
    const { arg } = payload;
    const response = yield call(api.get, '/search', {
      params: { arg }
    });

    yield put(searchRequestSuccess(response.data));
    
  } catch (err) {
    Alert.error(err.response.data.message);
    yield put(searchRequestFailure());
  }
}

export function* setSongs() {
  try{
    const response = yield call(api.get, '/chart/0');

    yield put(searchRequestSuccess(response.data));
    
  }catch (err) {
    Alert.error(err.response.data.message);
    yield put(searchRequestFailure());
  }
}

export default all([
  takeLatest("persist/REHYDRATE", setSongs),
  takeLatest("@songs/SEARCH_REQUEST", searchSongs),
]);
