import { combineReducers } from "redux";

import favorites from "./favorites/reducer";
import tracks from "./tracks/reducer";

export default combineReducers({
  favorites,
  tracks,
});
