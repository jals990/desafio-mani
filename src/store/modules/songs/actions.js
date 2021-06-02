export function searchRequest({ arg }) {
  return {
    type: "@songs/SEARCH_REQUEST",
    payload: { arg },
  };
}

export function searchRequestSuccess({ songs }) {
  return {
    type: "@songs/SEARCH_REQUEST_SUCCESS",
    payload: { songs },
  };
}

export function searchRequestFailure() {
  return {
    type: "@songs/SEARCH_REQUEST_FAILURE"
  };
}