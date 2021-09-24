import {
  UPDATE_NEWS_REQUEST,
  UPDATE_NEWS_FAILURE,
  UPDATE_NEWS_SUCCESS
} from '../news-constants';

const updateNewsRequest = (data) => ({
  data,
  type: UPDATE_NEWS_REQUEST
});

export const updateNewsSuccess = () => ({
  type: UPDATE_NEWS_SUCCESS
});

export const updateNewsFailure = () => ({
  type: UPDATE_NEWS_FAILURE
});

export const updateNews = async (data, dispatch) => {
  dispatch(updateNewsRequest(data));
};
