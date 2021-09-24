import {
  GET_PARTNER_BY_ID_REQUEST,
  GET_PARTNER_BY_ID_FAILURE,
  GET_PARTNER_BY_ID_SUCCESS
} from '../partner-constants';

const getPartnerByIdRequest = (data) => ({
  data,
  type: GET_PARTNER_BY_ID_REQUEST
});

export const getPartnerByIdSuccess = (data) => ({
  data,
  type: GET_PARTNER_BY_ID_SUCCESS
});

export const getPartnerByIdFailure = () => ({
  type: GET_PARTNER_BY_ID_FAILURE
});

export const getPartnerById = async (data, dispatch) => {
  dispatch(getPartnerByIdRequest(data));
};
