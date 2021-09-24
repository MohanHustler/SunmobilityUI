import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS
} from './signin-constants';

const loginRequest = (data) => ({
  data,
  type: LOGIN_REQUEST
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE
});

export const signin = async (data, dispatch) => {
  dispatch(loginRequest(data));
};
