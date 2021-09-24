import {
  GET_NEWS_REQUEST,
  GET_NEWS_FAILURE,
  GET_NEWS_SUCCESS
} from '../news-constants';

const initialState = {
  isLoading: false,
  newsList: []
};

const getNews = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        newsList: []
      };
    case GET_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        newsList: []
      };
    case GET_NEWS_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        newsList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getNews;
