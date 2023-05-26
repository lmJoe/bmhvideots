import { fromJS, merge } from 'immutable';
import { VIDEO_LIST, UPDATE_LOADING,VIDEO_PAGEINDEX,VIDEO_ID} from './actionTypes';

const initialState = {
  videoList: [],
  loadMore: true,
  pageIndex:1,
  pageSize: 20,
  videoId:0,
};

export interface videoReducer {
  videoList?: any[];
  loadMore?: boolean;
  pageIndex?:number,
  videoId:number,
}

export default function (state = initialState, action: { type: any; payload: { videoList?: any; loadMore?: any; pageIndex?: any; videoId?: any; }; }) {
  switch (action.type) {
    case VIDEO_LIST: {
      const { videoList } = action.payload;
      return {
        ...state,
        videoList,
      };
    }
    case UPDATE_LOADING: {
      const { loadMore } = action.payload;
      return {
        ...state,
        loadMore,
      };
    }
    case VIDEO_PAGEINDEX: {
      const { pageIndex } = action.payload;
      return {
        ...state,
        pageIndex,
      };
    }
    case VIDEO_ID: {
      const { videoId } = action.payload;
      return {
        ...state,
        videoId,
      };
    }
    default:
      return state;
  }
}
