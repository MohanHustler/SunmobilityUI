import {
  ADD_NEWS_REQUEST,
  ADD_NEWS_FAILURE,
  ADD_NEWS_SUCCESS
} from '../news-constants';

const initialState = {
  isLoading: false
};

const addNews = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addNews;
