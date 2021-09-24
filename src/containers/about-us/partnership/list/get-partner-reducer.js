import {
  GET_PARTNER_BY_ID_REQUEST,
  GET_PARTNER_BY_ID_FAILURE,
  GET_PARTNER_BY_ID_SUCCESS
} from '../partner-constants';

const initialState = {
  isLoading: false,
  partnerData: {}
};

const getPartnerById = (state = initialState, action) => {
  switch (action.type) {
    case GET_PARTNER_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        partnerData: {}
      };
    case GET_PARTNER_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        partnerData: {}
      };
    case GET_PARTNER_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        partnerData: action.data
      };
    default:
      return state;
  }
};

export default getPartnerById;
