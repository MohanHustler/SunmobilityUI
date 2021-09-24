import {
  DELETE_PARTNER_REQUEST,
  DELETE_PARTNER_FAILURE,
  DELETE_PARTNER_SUCCESS
} from '../partner-constants';

const initialState = {
  isLoading: false
};

const deletePartner = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PARTNER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case DELETE_PARTNER_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case DELETE_PARTNER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default deletePartner;
