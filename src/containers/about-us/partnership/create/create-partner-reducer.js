import {
  ADD_PARTNER_REQUEST,
  ADD_PARTNER_FAILURE,
  ADD_PARTNER_SUCCESS
} from '../partner-constants';

const initialState = {
  isLoading: false
};

const addPartner = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PARTNER_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case ADD_PARTNER_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case ADD_PARTNER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default addPartner;
