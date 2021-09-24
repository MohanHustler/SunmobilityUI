import {
  UPDATE_PARTNER_NEWS_REQUEST,
  UPDATE_PARTNER_NEWS_FAILURE,
  UPDATE_PARTNER_NEWS_SUCCESS
} from '../partner-constants';

const updatePartnerNewsRequest = (data) => ({
  data,
  type: UPDATE_PARTNER_NEWS_REQUEST
});

export const updatePartnerNewsSuccess = () => ({
  type: UPDATE_PARTNER_NEWS_SUCCESS
});

export const updatePartnerNewsFailure = () => ({
  type: UPDATE_PARTNER_NEWS_FAILURE
});

export const updatePartnerNews = async (data, dispatch) => {
  dispatch(updatePartnerNewsRequest(data));
};
