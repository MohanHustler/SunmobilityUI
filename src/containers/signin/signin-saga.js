import { call, put, takeLatest } from 'redux-saga/effects';
import * as Toastr from 'toastr';

import HttpHelper from '../../utils/http-helper';
import Storage from '../../utils/storage';

import { LOGIN_URL } from '../../utils/urls';

import { LOGIN_REQUEST } from './signin-constants';

import { loginSuccess, loginFailure } from './signin-action';

const { postRequest } = new HttpHelper();
const storage = new Storage();

export function* signin({ data }) {
  try {
    const response = yield call(postRequest, {
      data: {
        email: data.email,
        password: data.password
      },
      url: LOGIN_URL
    });

    if (response.error) {
      const { msg } = response.error.response.data;
      yield put(loginFailure());
      Toastr.error(msg, 'Failure');
    } else {
      yield put(loginSuccess());
      if (response.data.token) {
        storage.save('token', response.data.token);
        Toastr.success('Login Successfull', 'Success');
        data.loginCallback();
      }
    }
  } catch (err) {
    throw new Error(err);
  }
}

export function* watchSignin() {
  yield takeLatest(LOGIN_REQUEST, signin);
}
