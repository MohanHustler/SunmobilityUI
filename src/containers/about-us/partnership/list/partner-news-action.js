import {
  GET_PARTNER_NEWS_REQUEST,
  GET_PARTNER_NEWS_FAILURE,
  GET_PARTNER_NEWS_SUCCESS
} from '../partner-constants';

const getPartnerNewsRequest = (data) => ({
  data,
  type: GET_PARTNER_NEWS_REQUEST
});

export const getPartnerNewsSuccess = (data) => ({
  data,
  type: GET_PARTNER_NEWS_SUCCESS
});

export const getPartnerNewsFailure = () => ({
  type: GET_PARTNER_NEWS_FAILURE
});

export const getPartnerNews = async (data, dispatch) => {
  dispatch(getPartnerNewsRequest(data));
};
