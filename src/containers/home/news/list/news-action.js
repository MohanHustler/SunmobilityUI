import {
  GET_NEWS_REQUEST,
  GET_NEWS_FAILURE,
  GET_NEWS_SUCCESS
} from '../news-constants';

const getNewsRequest = (data) => ({
  data,
  type: GET_NEWS_REQUEST
});

export const getNewsSuccess = (data) => ({
  data,
  type: GET_NEWS_SUCCESS
});

export const getNewsFailure = () => ({
  type: GET_NEWS_FAILURE
});

export const getNews = async (data, dispatch) => {
  dispatch(getNewsRequest(data));
};
