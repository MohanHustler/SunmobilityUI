import {
  UPDATE_PARTNER_REQUEST,
  UPDATE_PARTNER_FAILURE,
  UPDATE_PARTNER_SUCCESS
} from '../partner-constants';

const updatePartnerRequest = (data) => ({
  data,
  type: UPDATE_PARTNER_REQUEST
});

export const updatePartnerSuccess = () => ({
  type: UPDATE_PARTNER_SUCCESS
});

export const updatePartnerFailure = () => ({
  type: UPDATE_PARTNER_FAILURE
});

export const updatePartner = async (data, dispatch) => {
  dispatch(updatePartnerRequest(data));
};
