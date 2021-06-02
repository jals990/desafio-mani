import { all } from "redux-saga/effects";

import songs from "./songs/sagas";

export default function* rootSaga() {
  return yield all([songs]);
}
