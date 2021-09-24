import {
  GET_SECTION_HEADING_REQUEST,
  GET_SECTION_HEADING_FAILURE,
  GET_SECTION_HEADING_SUCCESS
} from '../mediakit-constants';

const initialState = {
  sectionHeadingList: []
};

const getSectionHeading = (state = initialState, action) => {
  switch (action.type) {
    case GET_SECTION_HEADING_REQUEST:
      return {
        ...state,
        sectionHeadingList: []
      };
    case GET_SECTION_HEADING_FAILURE:
      return {
        ...state,
        sectionHeadingList: []
      };
    case GET_SECTION_HEADING_SUCCESS:
      const { data } = action.data;
      return {
        ...state,
        sectionHeadingList: data
      };
    default:
      return state;
  }
};

export default getSectionHeading;
