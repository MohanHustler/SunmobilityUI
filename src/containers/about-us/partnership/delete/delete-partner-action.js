import {
  DELETE_PARTNER_REQUEST,
  DELETE_PARTNER_FAILURE,
  DELETE_PARTNER_SUCCESS
} from '../partner-constants';

const deletePartnerRequest = (data) => ({
  data,
  type: DELETE_PARTNER_REQUEST
});

export const deletePartnerSuccess = () => ({
  type: DELETE_PARTNER_SUCCESS
});

export const deletePartnerFailure = () => ({
  type: DELETE_PARTNER_FAILURE
});

export const deletePartner = async (data, dispatch) => {
  dispatch(deletePartnerRequest(data));
};
