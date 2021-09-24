import {
  GET_PARTNER_NEWS_REQUEST,
  GET_PARTNER_NEWS_FAILURE,
  GET_PARTNER_NEWS_SUCCESS
} from '../partner-constants';

const initialState = {
  isLoading: false,
  partnerNewsList: []
};

const getPartnerNews = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTNER_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
        partnerNewsList: []
      };
    case GET_PARTNER_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        partnerNewsList: []
      };
    case GET_PARTNER_NEWS_SUCCESS:
      const { data, totalRecords } = action.data;
      return {
        ...state,
        isLoading: false,
        partnerNewsList: data,
        totalRecords
      };
    default:
      return state;
  }
};

export default getPartnerNews;
