import produce from "immer";

const INITIAL_STATE = {
  songs: null,
  loading: true,
};

export default function songs(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@songs/SEARCH_REQUEST": {
        draft.loading = true;
        break;
      }
      case "@songs/SEARCH_REQUEST_SUCCESS": {
        draft.songs = action.payload.songs;
        draft.loading = false;
        break;
      }
      case "@songs/SEARCH_REQUEST_FAILURE": {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
