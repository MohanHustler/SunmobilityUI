import {
  UPDATE_NEWS_REQUEST,
  UPDATE_NEWS_FAILURE,
  UPDATE_NEWS_SUCCESS
} from '../news-constants';

const initialState = {
  isLoading: false
};

const updateNews = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case UPDATE_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case UPDATE_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default updateNews;
