import { CHANNEL_ID, CHANNEL_LIST} from './actionTypes';

const initialState = {
  channelList: [],
  channelId: '',
};

export interface channelReducer {
  channelList?: any[];
  channelId: string;
}

export default function (state = initialState, action: { type: any; payload: { channelList?: any; channelId?: any; }; }) {
  switch (action.type) {
    
    case CHANNEL_ID: {
      const { channelId } = action.payload;

      return {
        ...state,
        channelId,
      };
    }
    case CHANNEL_LIST: {
      const { channelList } = action.payload;
      return {
        ...state,
        channelList,
      };
    }
    
    default:
      return state;
  }
}
