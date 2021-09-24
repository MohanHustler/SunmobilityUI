import {
  DELETE_PARTNER_NEWS_REQUEST,
  DELETE_PARTNER_NEWS_FAILURE,
  DELETE_PARTNER_NEWS_SUCCESS
} from '../partner-constants';

const initialState = {
  isLoading: false
};

const deletePartnerNews = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PARTNER_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_PARTNER_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_PARTNER_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deletePartnerNews;
