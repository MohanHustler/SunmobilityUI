import {
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_FAILURE,
  DELETE_NEWS_SUCCESS
} from '../news-constants';

const deleteNewsRequest = (data) => ({
  data,
  type: DELETE_NEWS_REQUEST
});

export const deleteNewsSuccess = () => ({
  type: DELETE_NEWS_SUCCESS
});

export const deleteNewsFailure = () => ({
  type: DELETE_NEWS_FAILURE
});

export const deleteNews = async (data, dispatch) => {
  dispatch(deleteNewsRequest(data));
};
