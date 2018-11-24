import { LOAD_PLAYLISTS_COMPLETE } from '../actions/types';

const initialState = {
  playlists: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case LOAD_PLAYLISTS_COMPLETE:
      return {
        ...state,
        playlists: action.payload
      }
    default:
      return state;
  }
}