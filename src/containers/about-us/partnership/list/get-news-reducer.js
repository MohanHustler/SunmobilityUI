import {
  GET_PARTNER_NEWS_LIST_REQUEST,
  GET_PARTNER_NEWS_LIST_FAILURE,
  GET_PARTNER_NEWS_LIST_SUCCESS
} from '../partner-constants';

const initialState = {
  isLoading: false,
  newsList: []
};

const getPartnerNewsList = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTNER_NEWS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        newsList: []
      };
    case GET_PARTNER_NEWS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        newsList: []
      };
    case GET_PARTNER_NEWS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        newsList: action.data
      };
    default:
      return state;
  }
};

export default getPartnerNewsList;
