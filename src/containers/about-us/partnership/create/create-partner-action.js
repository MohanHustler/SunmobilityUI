import {
  ADD_PARTNER_REQUEST,
  ADD_PARTNER_FAILURE,
  ADD_PARTNER_SUCCESS
} from '../partner-constants';

const addPartnerRequest = (data) => ({
  data,
  type: ADD_PARTNER_REQUEST
});

export const addPartnerSuccess = () => ({
  type: ADD_PARTNER_SUCCESS
});

export const addPartnerFailure = () => ({
  type: ADD_PARTNER_FAILURE
});

export const addPartner = async (data, dispatch) => {
  dispatch(addPartnerRequest(data));
};
