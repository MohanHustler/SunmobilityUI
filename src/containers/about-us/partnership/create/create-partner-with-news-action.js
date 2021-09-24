import {
  ADD_PARTNER_WITH_NEWS_REQUEST,
  ADD_PARTNER_WITH_NEWS_FAILURE,
  ADD_PARTNER_WITH_NEWS_SUCCESS
} from '../partner-constants';

const addPartnerWithNewsRequest = (data) => ({
  data,
  type: ADD_PARTNER_WITH_NEWS_REQUEST
});

export const addPartnerWithNewsSuccess = () => ({
  type: ADD_PARTNER_WITH_NEWS_SUCCESS
});

export const addPartnerWithNewsFailure = () => ({
  type: ADD_PARTNER_WITH_NEWS_FAILURE
});

export const addPartnerWithNews = async (data, dispatch) => {
  dispatch(addPartnerWithNewsRequest(data));
};
