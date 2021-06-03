import produce from "immer";

const INITIAL_STATE = {
  tracks: [],
  loading: true,
  endedPlayTrack: false,
  playMusic: false,
};

export default function tracks(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@tracks/TRACKS_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@tracks/TRACKS_REQUEST_SUCCESS": {
        draft.tracks = action.payload.tracks;
        draft.loading = false;
        break;
      }case "@tracks/TRACKS_REQUEST_FAILURE": {
        draft.loading = false;
        break;
      }case "@tracks/SEARCH_REQUEST": {
        draft.loading = true;
        draft.tracks = null;
        break;
      }
      case "@tracks/SEARCH_REQUEST_SUCCESS": {
        draft.tracks = action.payload.tracks;
        draft.loading = false;
        break;
      }
      case "@tracks/SEARCH_REQUEST_FAILURE": {
        draft.loading = false;
        break;
      }
      case "@tracks/END_TRACK": {
        draft.endedPlayTrack = true;
        draft.playMusic = false;
        break;
      }
      case "@tracks/PLAY_TRACK": {
        draft.endedPlayTrack = false;
        draft.playMusic = true;
        break;
      }
      default:
    }
  });
}
