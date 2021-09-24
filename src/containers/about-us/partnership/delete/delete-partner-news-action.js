import {
  DELETE_PARTNER_NEWS_REQUEST,
  DELETE_PARTNER_NEWS_FAILURE,
  DELETE_PARTNER_NEWS_SUCCESS
} from '../partner-constants';

const deletePartnerNewsRequest = (data) => ({
  data,
  type: DELETE_PARTNER_NEWS_REQUEST
});

export const deletePartnerNewsSuccess = () => ({
  type: DELETE_PARTNER_NEWS_SUCCESS
});

export const deletePartnerNewsFailure = () => ({
  type: DELETE_PARTNER_NEWS_FAILURE
});

export const deletePartnerNews = async (data, dispatch) => {
  dispatch(deletePartnerNewsRequest(data));
};
