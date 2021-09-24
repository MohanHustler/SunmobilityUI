import {
  GET_NETWORK_BY_ID_REQUEST,
  GET_NETWORK_BY_ID_FAILURE,
  GET_NETWORK_BY_ID_SUCCESS
} from '../network-constants';

const getNetworkByIdRequest = (data) => ({
  data,
  type: GET_NETWORK_BY_ID_REQUEST
});

export const getNetworkByIdSuccess = (data) => ({
  data,
  type: GET_NETWORK_BY_ID_SUCCESS
});

export const getNetworkByIdFailure = () => ({
  type: GET_NETWORK_BY_ID_FAILURE
});

export const getNetworkById = async (data, dispatch) => {
  dispatch(getNetworkByIdRequest(data));
};
