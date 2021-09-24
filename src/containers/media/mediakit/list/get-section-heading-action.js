import {
  GET_SECTION_HEADING_REQUEST,
  GET_SECTION_HEADING_FAILURE,
  GET_SECTION_HEADING_SUCCESS
} from '../mediakit-constants';

const getSectionHeadingRequest = () => ({
  type: GET_SECTION_HEADING_REQUEST
});

export const getSectionHeadingSuccess = (data) => ({
  data,
  type: GET_SECTION_HEADING_SUCCESS
});

export const getSectionHeadingFailure = () => ({
  type: GET_SECTION_HEADING_FAILURE
});

export const getSectionHeading = async (dispatch) => {
  dispatch(getSectionHeadingRequest());
};
