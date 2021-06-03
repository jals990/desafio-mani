import produce from "immer";
import { Alert } from "rsuite";

const INITIAL_STATE = {
  favorites: [],
};

export default function favorites(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "@favorites/ADD_TRACK":
        return produce(state, draft => {
          const index = draft.favorites.findIndex(p => p.id === action.payload.track.id);

           if (index >= 0) {
             Alert.error('Essa track já está nos favoritos')
            return
          }
          
          draft.favorites.push({
            ...action.payload.track
          });
          Alert.success('Track adicionada')
        });
      case "@favorites/REMOVE_TRACK": 
        return produce(state, draft => {
          const index = draft.favorites.findIndex(p => p.id === action.payload.id);
           if (index >= 0) {
            draft.favorites.splice(index, 1);
          }
          Alert.info('Track removida')
        });
      default:
        return state;
    }
}
