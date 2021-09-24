import {
  ADD_NEWS_REQUEST,
  ADD_NEWS_FAILURE,
  ADD_NEWS_SUCCESS
} from '../news-constants';

const addNewsRequest = (data) => ({
  data,
  type: ADD_NEWS_REQUEST
});

export const addNewsSuccess = () => ({
  type: ADD_NEWS_SUCCESS
});

export const addNewsFailure = () => ({
  type: ADD_NEWS_FAILURE
});

export const addNews = async (data, dispatch) => {
  dispatch(addNewsRequest(data));
};
