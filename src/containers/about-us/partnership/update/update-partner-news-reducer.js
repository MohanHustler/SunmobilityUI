import {
  UPDATE_PARTNER_NEWS_REQUEST,
  UPDATE_PARTNER_NEWS_FAILURE,
  UPDATE_PARTNER_NEWS_SUCCESS
} from '../partner-constants';

const initialState = {
  isUpdateNewsLoading: false
};

const updatePartnerNews = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PARTNER_NEWS_REQUEST:
      return {
        ...state,
        isUpdateNewsLoading: true
      };
    case UPDATE_PARTNER_NEWS_FAILURE:
      return {
        ...state,
        isUpdateNewsLoading: false
      };
    case UPDATE_PARTNER_NEWS_SUCCESS:
      return {
        ...state,
        isUpdateNewsLoading: false
      };
    default:
      return state;
  }
};

export default updatePartnerNews;
