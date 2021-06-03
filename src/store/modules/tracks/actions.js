export function tracksRequest() {
  return {
    type: "@tracks/TRACKS_REQUEST"
  };
}

export function tracksRequestSuccess({ tracks }) {
  return {
    type: "@tracks/TRACKS_REQUEST_SUCCESS",
    payload: { tracks },
  };
}

export function tracksRequestFailure() {
  return {
    type: "@tracks/TRACKS_REQUEST_FAILURE"
  };
}

export function searchRequest({ arg }) {
  return {
    type: "@tracks/SEARCH_REQUEST",
    payload: { arg },
  };
}

export function searchRequestSuccess({ tracks }) {
  return {
    type: "@tracks/SEARCH_REQUEST_SUCCESS",
    payload: { tracks },
  };
}

export function searchRequestFailure() {
  return {
    type: "@tracks/SEARCH_REQUEST_SUCCESS"
  };
}

export function endTrack() {
  return {
    type: "@tracks/END_TRACK"
  };
}

export function playTrack() {
  return {
    type: "@tracks/PLAY_TRACK"
  };
}