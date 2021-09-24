import {
  GET_NEWS_BY_ID_REQUEST,
  GET_NEWS_BY_ID_FAILURE,
  GET_NEWS_BY_ID_SUCCESS
} from '../news-constants';

const getNewsByIdRequest = (data) => ({
  data,
  type: GET_NEWS_BY_ID_REQUEST
});

export const getNewsByIdSuccess = (data) => ({
  data,
  type: GET_NEWS_BY_ID_SUCCESS
});

export const getNewsByIdFailure = () => ({
  type: GET_NEWS_BY_ID_FAILURE
});

export const getNewsById = async (data, dispatch) => {
  dispatch(getNewsByIdRequest(data));
};
