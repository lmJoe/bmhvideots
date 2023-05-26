import { fromJS, merge } from 'immutable';
import { MEDIA_LIST} from './actionTypes';

const initialState = {
  mediaList: [],
};

export interface mediaReducer {
  mediaList?: any[];
}

export default function (state = initialState, action: { type: any; payload: { mediaList: any; }; }) {
  switch (action.type) {
    case MEDIA_LIST: {
      const { mediaList } = action.payload;
      return {
        ...state,
        mediaList,
      };
    }
    
    default:
      return state;
  }
}
