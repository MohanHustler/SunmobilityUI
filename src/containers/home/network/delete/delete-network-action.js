import {
  DELETE_NETWORK_REQUEST,
  DELETE_NETWORK_FAILURE,
  DELETE_NETWORK_SUCCESS
} from '../network-constants';

const deleteNetworkRequest = (data) => ({
  data,
  type: DELETE_NETWORK_REQUEST
});

export const deleteNetworkSuccess = () => ({
  type: DELETE_NETWORK_SUCCESS
});

export const deleteNetworkFailure = () => ({
  type: DELETE_NETWORK_FAILURE
});

export const deleteNetwork = async (data, dispatch) => {
  dispatch(deleteNetworkRequest(data));
};
