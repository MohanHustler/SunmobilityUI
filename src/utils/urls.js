// export const BASE_URL = `http://localhost:4000/v1/api`;
export const BASE_URL = `https://sm-cms-api-staging.azurewebsites.net/v1/api`;

// URL parameter helper.
const attachParams = (baseUrl, params) => {
  var url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();
  return url;
};

export const LOGIN_URL = `${BASE_URL}/users/login`;

export const DASHBOARD_URL = `${BASE_URL}/dashboard`;

export const NETWORK_URL = `${BASE_URL}/networks`;
export const networkUrl = (params = null) => {
  if (params) {
    return attachParams(NETWORK_URL, params);
  } else {
    return NETWORK_URL;
  }
};
export const networkUrlWithId = (networkId) => {
  return `${NETWORK_URL}/${networkId}`;
};

export const NEWS_URL = `${BASE_URL}/news`;
export const newsUrl = (params = null) => {
  if (params) {
    return attachParams(NEWS_URL, params);
  } else {
    return NEWS_URL;
  }
};
export const newsUrlWithId = (newsId) => {
  return `${NEWS_URL}/${newsId}`;
};

const MILESTONE_URL = `${BASE_URL}/milestones`;
export const milestoneUrl = (params = null) => {
  if (params) {
    return attachParams(MILESTONE_URL, params);
  } else {
    return MILESTONE_URL;
  }
};

export const milestoneUrlWithId = (milestoneId) => {
  return `${MILESTONE_URL}/${milestoneId}`;
};

export const PARTNER_URL = `${BASE_URL}/partners`;
export const partnerUrl = (params = null) => {
  if (params) {
    return attachParams(PARTNER_URL, params);
  } else {
    return PARTNER_URL;
  }
};
export const partnerUrlWithId = (partnerId) => {
  return `${PARTNER_URL}/${partnerId}`;
};

export const PARTNER_NEWS_URL = `${BASE_URL}/partner_news`;
export const partnerNewsUrlWithId = (partnerId) => {
  return `${PARTNER_NEWS_URL}/${partnerId}`;
};

export const CATEGORY_URL = `${BASE_URL}/categories`;
export const categoryUrlWithId = (categoryId) => {
  return `${CATEGORY_URL}/${categoryId}`;
};
export const categoryUrlWithIndicator = (indicator) => {
  return `${CATEGORY_URL}/indicator/${indicator}`;
};

export const COVERAGE_URL = `${BASE_URL}/coverages`;
export const coverageUrlWithCategory = (categoryId, params = null) => {
  const COVERAGE_WITH_CATEGORY_URL = `${COVERAGE_URL}/category/${categoryId}`;
  if (params) {
    return attachParams(COVERAGE_WITH_CATEGORY_URL, params);
  } else {
    return COVERAGE_WITH_CATEGORY_URL;
  }
};

export const coverageUrlWithId = (coverageId) => {
  return `${COVERAGE_URL}/${coverageId}`;
};

export const IMAGE_GALLERY_URL = `${BASE_URL}/image_galleries`;
export const imageGalleryUrlWithCategory = (categoryId, params = null) => {
  const IMAGE_GALLERY_WITH_CATEGORY_URL = `${IMAGE_GALLERY_URL}/category/${categoryId}`;
  if (params) {
    return attachParams(IMAGE_GALLERY_WITH_CATEGORY_URL, params);
  } else {
    return IMAGE_GALLERY_WITH_CATEGORY_URL;
  }
};

export const imageGalleryUrlWithId = (imageGalleryId) => {
  return `${IMAGE_GALLERY_URL}/${imageGalleryId}`;
};

export const imageGalleryUrlLaunchId = (launchId) => {
  return `${IMAGE_GALLERY_URL}/launches/${launchId}`;
};

export const VIDEO_URL = `${BASE_URL}/videos`;
export const videoUrlWithCategory = (categoryId, params = null) => {
  const VIDEO_WITH_CATEGORY_URL = `${VIDEO_URL}/category/${categoryId}`;
  if (params) {
    return attachParams(VIDEO_WITH_CATEGORY_URL, params);
  } else {
    return VIDEO_WITH_CATEGORY_URL;
  }
};
export const videoUrlWithId = (videoId) => {
  return `${VIDEO_URL}/${videoId}`;
};

export const MEDIAKIT_URL = `${BASE_URL}/mediakits`;
export const mediakitUrlWithCategory = (categoryId, params = null) => {
  const MEDIAKIT_WITH_CATEGORY_URL = `${MEDIAKIT_URL}/category/${categoryId}`;
  if (params) {
    return attachParams(MEDIAKIT_WITH_CATEGORY_URL, params);
  } else {
    return MEDIAKIT_WITH_CATEGORY_URL;
  }
};
export const mediakitUrlWithId = (mediakitId) => {
  return `${MEDIAKIT_URL}/${mediakitId}`;
};
export const MEDIAKIT_SECTION_HEADING_URL = `${BASE_URL}/mediakits/heading`;
