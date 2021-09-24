import {
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_FAILURE,
  DELETE_NEWS_SUCCESS
} from '../news-constants';

const initialState = {
  isLoading: false
};

const deleteNews = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deleteNews;
