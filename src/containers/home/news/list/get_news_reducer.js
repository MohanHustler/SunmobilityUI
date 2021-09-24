import {
  GET_NEWS_BY_ID_REQUEST,
  GET_NEWS_BY_ID_FAILURE,
  GET_NEWS_BY_ID_SUCCESS
} from '../news-constants';

const initialState = {
  isEditNewsLoading: false,
  newsData: {}
};

const getNewsById = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_BY_ID_REQUEST:
      return {
        ...state,
        isEditNewsLoading: true,
        newsData: {}
      };
    case GET_NEWS_BY_ID_FAILURE:
      return {
        ...state,
        isEditNewsLoading: false,
        newsData: {}
      };
    case GET_NEWS_BY_ID_SUCCESS:
      return {
        ...state,
        isEditNewsLoading: false,
        newsData: action.data
      };
    default:
      return state;
  }
};

export default getNewsById;
