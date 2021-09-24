import {
  UPDATE_PARTNER_REQUEST,
  UPDATE_PARTNER_FAILURE,
  UPDATE_PARTNER_SUCCESS
} from '../partner-constants';

const initialState = {
  isPartnerLoading: false
};

const updatePartner = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PARTNER_REQUEST:
      return {
        ...state,
        isPartnerLoading: true
      };
    case UPDATE_PARTNER_FAILURE:
      return {
        ...state,
        isPartnerLoading: false
      };
    case UPDATE_PARTNER_SUCCESS:
      return {
        ...state,
        isPartnerLoading: false
      };
    default:
      return state;
  }
};

export default updatePartner;
