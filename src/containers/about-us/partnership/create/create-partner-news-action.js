import {
  ADD_PARTNER_NEWS_REQUEST,
  ADD_PARTNER_NEWS_FAILURE,
  ADD_PARTNER_NEWS_SUCCESS
} from '../partner-constants';

const addPartnerNewsRequest = (data) => ({
  data,
  type: ADD_PARTNER_NEWS_REQUEST
});

export const addPartnerNewsSuccess = () => ({
  type: ADD_PARTNER_NEWS_SUCCESS
});

export const addPartnerNewsFailure = () => ({
  type: ADD_PARTNER_NEWS_FAILURE
});

export const addPartnerNews = async (data, dispatch) => {
  dispatch(addPartnerNewsRequest(data));
};
