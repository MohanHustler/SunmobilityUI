import {
  GET_PARTNER_NEWS_LIST_REQUEST,
  GET_PARTNER_NEWS_LIST_FAILURE,
  GET_PARTNER_NEWS_LIST_SUCCESS
} from '../partner-constants';

const getPartnerNewsListRequest = () => ({
  type: GET_PARTNER_NEWS_LIST_REQUEST
});

export const getPartnerNewsListSuccess = (data) => ({
  data,
  type: GET_PARTNER_NEWS_LIST_SUCCESS
});

export const getPartnerNewsListFailure = () => ({
  type: GET_PARTNER_NEWS_LIST_FAILURE
});

export const getPartnerNewsList = async (dispatch) => {
  dispatch(getPartnerNewsListRequest());
};
