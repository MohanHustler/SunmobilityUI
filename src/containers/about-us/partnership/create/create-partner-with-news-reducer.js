import {
  ADD_PARTNER_WITH_NEWS_REQUEST,
  ADD_PARTNER_WITH_NEWS_FAILURE,
  ADD_PARTNER_WITH_NEWS_SUCCESS
} from '../partner-constants';

const initialState = {
  isAddNewsLoading: false
};

const addPartnerWithNews = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTNER_WITH_NEWS_REQUEST:
      return {
        ...state,
        isAddNewsLoading: true
      };
    case ADD_PARTNER_WITH_NEWS_FAILURE:
      return {
        ...state,
        isAddNewsLoading: false
      };
    case ADD_PARTNER_WITH_NEWS_SUCCESS:
      return {
        ...state,
        isAddNewsLoading: false
      };
    default:
      return state;
  }
};

export default addPartnerWithNews;
